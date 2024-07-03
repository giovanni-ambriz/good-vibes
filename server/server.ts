import * as Path from 'node:path'
import express from 'express'

const server = express()

server.use(express.json())

export default server
