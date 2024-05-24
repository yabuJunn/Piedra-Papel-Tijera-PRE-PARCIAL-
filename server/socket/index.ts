import { Socket } from "socket.io"
import { Server } from 'socket.io'
import { createServer } from 'http'
import { app } from "../express";
import { database } from "../dataBase";
import { gameBoxesStateType, moveFunction } from "../utils/winningComprobation";

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
        database.player1 = socket.id
        socket.emit('initializePlayer', JSON.stringify({ myId: socket.id, player: "player1" }))
    } else if (!database.player2) {
        database.player2 = socket.id
        socket.emit('initializePlayer', JSON.stringify({ myId: socket.id, player: "player2" }))
        database.playing = true
        setTimeout(() => {
            io.emit('startGame', "true") //No manda el mensaje al player1
        }, 1000)
        setTimeout(() => {
            io.emit('updateTurn', "player1") //No manda el mensaje al player1
        }, 1000)
    } else {
        socket.emit('initializePlayer', JSON.stringify({ myId: socket.id, player: "player0" }))
    }
    console.log(database)

    socket.on('move', (data: gameBoxesStateType) => {
        moveFunction(data)
    })
})