// imports go here
import express from 'express'
const router = express.Router()
import superagent from 'superagent'
import 'dotenv/config'
import request from 'superagent'

// code for fetching images from unsplash API goes here

// this API is not CORS restricted

const baseUrl = 'https://api.unsplash.com'
const collectionId = 'W__g8PXf6YA'

router.get('/', async (req, res) => {
  console.log('getting something')
  try {
    const response = await request
      .get(`${baseUrl}/collections/${collectionId}/photos`)
      .query({ client_id: process.env.IMG_ACCESS_KEY })
    console.log(response.body)
    res.json(response.body)
  } catch (error) {
    console.error('Error fetching calming pics:', error)
    res.status(500).send('Error fetching images')
  }
})

export default router
