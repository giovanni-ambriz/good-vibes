import * as Path from 'node:path'
import express from 'express'
import affRouter from './routes/affirmationRoutes'
import { Request, Response } from 'express'

const server = express()

server.use(express.json())

// Mount affirmation route
server.use('/affirmation', affRouter)

server.get('/', async (req: Request, res: Response) => {
  try {
    const affirmation = await getAffirmation()
    res.json({ affirmation })
  } catch (error) {
    console.error('Error fetching affirmation:', error)
    res.status(500).json({ message: 'Error fetching affirmation' })
  }
})
async function getAffirmation() {
  try {
    const response = await request.get('https;//www.affirmations.dev/')
    return response.body
  } catch (error) {
    console.error('Error fetching affirmation:', error)
    return 'Error fetching affirmation'
  }
}

export default server
