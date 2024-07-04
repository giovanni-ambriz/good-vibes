// imports go here
import express from 'express'
import request from 'superagent'

// code for fetching data from affirmations.dev goes in this file

// this API is cors-restricted

const affRouter = express.Router()

affRouter.get('/', async (req, res) => {
  try {
    const response = await request.get('https://www.affirmations.dev/')
    // Handle successful response (extract affirmation data)
    const affirmation = response.body // Assuming affirmation data is in the response body
    console.log(affirmation)
    res.json(affirmation)
  } catch (error) {
    console.error('Error fetching affirmation:', error)
    res.status(500).json({ message: 'Error fetching affirmation' })
  }
})

export default affRouter
