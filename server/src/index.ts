import { app } from './app.js'

const DEFAULT_PORT = 8787
const HOST = '127.0.0.1'

function getPort(value: string | undefined): number {
  if (value === undefined || !/^\d+$/.test(value)) {
    return DEFAULT_PORT
  }

  const port = Number(value)

  return Number.isInteger(port) && port >= 1 && port <= 65_535
    ? port
    : DEFAULT_PORT
}

const port = getPort(process.env.AI_WORKFLOW_STUDIO_PORT)

app.listen(port, HOST, () => {
  console.log(`AI Workflow Studio server: http://${HOST}:${port}`)
})
