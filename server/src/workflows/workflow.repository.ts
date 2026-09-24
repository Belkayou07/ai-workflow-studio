import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  workflowSchema,
  type Workflow,
} from '../../../shared/workflows/index.js'

const workflowsDirectory = fileURLToPath(
  new URL('../../../.data/workflows/', import.meta.url),
)

function workflowFilePath(id: string): string {
  const safeId = Buffer.from(id, 'utf8').toString('base64url')

  return path.join(workflowsDirectory, `${safeId}.json`)
}

async function ensureWorkflowsDirectory(): Promise<void> {
  await mkdir(workflowsDirectory, { recursive: true })
}

async function readWorkflowFile(filePath: string): Promise<Workflow> {
  const contents = await readFile(filePath, 'utf8')
  const data: unknown = JSON.parse(contents)

  return workflowSchema.parse(data)
}

export async function listWorkflows(): Promise<Workflow[]> {
  await ensureWorkflowsDirectory()

  const entries = await readdir(workflowsDirectory, { withFileTypes: true })
  const workflowFiles = entries.filter(
    (entry) => entry.isFile() && path.extname(entry.name) === '.json',
  )
  const workflows = await Promise.all(
    workflowFiles.map((entry) =>
      readWorkflowFile(path.join(workflowsDirectory, entry.name)),
    ),
  )

  return workflows.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

export async function getWorkflow(id: string): Promise<Workflow | null> {
  await ensureWorkflowsDirectory()

  try {
    const workflow = await readWorkflowFile(workflowFilePath(id))

    if (workflow.id !== id) {
      throw new Error('Stored workflow ID does not match its filename')
    }

    return workflow
  } catch (error) {
    if (isFileNotFoundError(error)) {
      return null
    }

    throw error
  }
}

export async function saveWorkflow(workflow: Workflow): Promise<Workflow> {
  const validatedWorkflow = workflowSchema.parse(workflow)

  await ensureWorkflowsDirectory()
  await writeFile(
    workflowFilePath(validatedWorkflow.id),
    `${JSON.stringify(validatedWorkflow, null, 2)}\n`,
    'utf8',
  )

  return validatedWorkflow
}

export async function deleteWorkflow(id: string): Promise<boolean> {
  await ensureWorkflowsDirectory()

  try {
    await unlink(workflowFilePath(id))
    return true
  } catch (error) {
    if (isFileNotFoundError(error)) {
      return false
    }

    throw error
  }
}

function isFileNotFoundError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error
    && 'code' in error
    && error.code === 'ENOENT'
}
