// imports go here
import express from 'express'
import request from 'superagent'

const affRouter = express.Router()

affRouter.get('/affirmations', async (req, res) => {
  try {
    const response = await request.get('https://www.affirmations.dev/')
    const affirmation = response.body // Assuming affirmation data is in the response body
    res.json({ affirmation })
  } catch (error) {
    console.error('Error fetching affirmation:', error)
    res.status(500).json({ message: 'Error fetching affirmation' })
  }
})

export default affRouter
