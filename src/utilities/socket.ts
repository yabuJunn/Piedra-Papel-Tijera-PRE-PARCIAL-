import { io } from "socket.io-client";
import { dispatch } from "../store";
import { updateGameState, updateMyId, updatePlayer1, updatePlayer2 } from "../store/actions";

const socketClient = io("http://localhost:5500")

socketClient.on('initializePlayer', (data) => {
    const dataJSON = JSON.parse(data)

    dispatch(
        updateMyId(dataJSON.myId, true)
    )

    if (dataJSON.player === "player1") {
        dispatch(
            updatePlayer1(dataJSON.myId, true)
        )
    } else if (dataJSON.player === "player2") {
        dispatch(
            updatePlayer2(dataJSON.myId, true)
        )
    } else if (dataJSON.player === "full") {
        alert("El juego esta lleno")
    }
})

socketClient.on('startGame', (data) => {
    if (data === "true") {
        dispatch(
            updateGameState(true, true)
        )
    }
})