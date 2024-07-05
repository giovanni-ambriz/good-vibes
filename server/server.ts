import express from 'express'
import affRouter from './routes/affirmationRoutes'
import imgRouter from './routes/imageRoutes'

const server = express()

server.use(express.json())
server.use('/api/v1/affirmations', affRouter)
server.use('/api/v1/calming-pics', imgRouter)
// Mount affirmation route

export default server
