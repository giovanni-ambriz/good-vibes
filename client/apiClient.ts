import request from 'superagent'
import { Affirmation } from '../models/affirmations'

export async function getAffirmation(): Promise<Affirmation> {
  const res = await request.get('/api/v1/affirmations')
  return res.body as Affirmation
}

export async function getImages(): Promise<string[]> {
  const response = await request.get('/api/v1/calming-pics')
  return response.body.map((image: any) => image.urls.regular)
}
