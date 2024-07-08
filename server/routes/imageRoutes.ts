// imports go here
import express from 'express'
const router = express.Router()
import superagent from 'superagent'
import 'dotenv/config'
import request from 'superagent'

// code for fetching images from unsplash API goes here

// this API is not CORS restricted

const Access_Key = '4kf1_49VsU1dJu89RhzHYReHNje7XxBRguWapbYTrCk'

const baseUrl = 'https://api.unsplash.com'
const collectionId = 'W__g8PXf6YA'

router.get('/', async (req, res) => {
  console.log('getting something')
  try {
    const response = await request
      .get(`${baseUrl}/collections/${collectionId}/photos`)
      .query({ client_id: Access_Key })
    console.log(response.body)
    res.json(response.body)
  } catch (error) {
    console.error('Error fetching calming pics:', error)
    res.status(500).send('Error fetching images')
  }
})

export default router
