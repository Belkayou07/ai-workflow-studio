import express from 'express'
import { workflowRouter } from './workflows/workflow.routes.js'

export const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/workflows', workflowRouter)

app.use('/api', (_request, response) => {
  response.status(404).json({ error: 'Not found' })
})

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  void _next

  if (error instanceof SyntaxError && 'status' in error && error.status === 400) {
    response.status(400).json({ error: 'Invalid JSON' })
    return
  }

  console.error('Unexpected server error:', error)
  response.status(500).json({ error: 'Internal server error' })
})
