import { Router } from 'express'
import { z } from 'zod'
import {
  createWorkflow,
  workflowSchema,
} from '../../../shared/workflows/index.js'
import {
  deleteWorkflow,
  getWorkflow,
  listWorkflows,
  saveWorkflow,
} from './workflow.repository.js'

const createWorkflowBodySchema = z.object({
  name: z.string().optional(),
}).strict()

export const workflowRouter = Router()

workflowRouter.get('/', async (_request, response) => {
  const workflows = await listWorkflows()

  response.json({ workflows })
})

workflowRouter.get('/:id', async (request, response) => {
  const workflow = await getWorkflow(request.params.id)

  if (workflow === null) {
    response.status(404).json({ error: 'Workflow not found' })
    return
  }

  response.json({ workflow })
})

workflowRouter.post('/', async (request, response) => {
  const result = createWorkflowBodySchema.safeParse(request.body)

  if (!result.success) {
    response.status(400).json({ error: 'Invalid request body' })
    return
  }

  const workflow = createWorkflow(result.data.name)
  const savedWorkflow = await saveWorkflow(workflow)

  response.status(201).json({ workflow: savedWorkflow })
})

workflowRouter.put('/:id', async (request, response) => {
  const result = workflowSchema.safeParse(request.body)

  if (!result.success || result.data.id !== request.params.id) {
    response.status(400).json({ error: 'Invalid workflow or mismatched ID' })
    return
  }

  const existingWorkflow = await getWorkflow(request.params.id)

  if (existingWorkflow === null) {
    response.status(404).json({ error: 'Workflow not found' })
    return
  }

  const savedWorkflow = await saveWorkflow({
    ...result.data,
    createdAt: existingWorkflow.createdAt,
    updatedAt: new Date().toISOString(),
  })

  response.json({ workflow: savedWorkflow })
})

workflowRouter.delete('/:id', async (request, response) => {
  const deleted = await deleteWorkflow(request.params.id)

  if (!deleted) {
    response.status(404).json({ error: 'Workflow not found' })
    return
  }

  response.status(204).end()
})
