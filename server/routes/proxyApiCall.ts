import request from 'superagent'

export async function getAffirmation() {
  const res = await request.get('https://www.affirmations.dev/')
  console.log(res.body)
  return res.body
}
export async function getUnsplash() {
  const res = await request.get(
    'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY',
  )
  return res.body
}
