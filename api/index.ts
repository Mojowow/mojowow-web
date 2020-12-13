import express from 'express'
import authenticator from './middleware/authenticator'
import {} from './types'
// const db = require('./db/connection')
import routes from './routes/'

// Create express instance
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Authenticator Middleware
app.use(authenticator)

// const articles = require('./routes/articles')

// Use API Routes
app.use(routes)
// app.use(articles)

// Export the server middleware
export const serverMiddleware = {
  path: '/api',
  handler: app,
}

export default serverMiddleware
