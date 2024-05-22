import { Socket } from "socket.io"
import { Server } from 'socket.io'
import { createServer } from 'http'
import { app } from "../express";
import { database } from "../dataBase";

export let globalSocket: Socket | undefined = undefined
export const httpServer = createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "PATCH"]
    }
});

io.on('connection', (socket: Socket) => {
    globalSocket = socket

    console.log(`A user has connected from: ${socket.client.request.headers.origin}`)
    console.log(`With socket session ID of: ${socket.id}`)

    if (!database.player1) {
        socket.emit('initializePlayer', JSON.stringify({ myId: socket.id, player: "player1" }))
    }
})