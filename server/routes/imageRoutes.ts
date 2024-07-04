// imports go here
import express from 'express'
import request from 'superagent'
// code for fetching images from unsplash API goes here

// this API is not CORS restricted

const imgRouter = express.Router()

imgRouter.get('/images', async (req, res) => {
  try {
    const response = await request
      .get('https://api.unsplash.com/photos/random')
      .query({ client_id: 'YOUR_UNSPLASH_ACCESS_KEY', count: 1 })
    const image = response.body[0]
    res.json({ image })
  } catch (error) {
    console.error('Error fetching image:', error)
    res.status(500).json({ message: 'Error fetching image' })
  }
})

export default imgRouter
