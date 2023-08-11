import express from 'express'
import cors from 'cors'
import * as http from "http";
import {Server} from "socket.io";

const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

server.listen(3001, () => {
    console.log('server listen 3001')
})