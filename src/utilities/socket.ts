import { io } from "socket.io-client";
import { dispatch } from "../store";
import { updateGameState, updateMyId, updatePlayer1, updatePlayer2, updatePlayerType, updateTurn } from "../store/actions";

export const socketClient = io("http://localhost:5500")

socketClient.on('initializePlayer', (data) => {
    const dataJSON = JSON.parse(data)

    dispatch(
        updateMyId(dataJSON.myId, true)
    )

    if (dataJSON.player === "player1") {
        dispatch(
            updatePlayer1(dataJSON.myId, true)
        )
        dispatch(
            updatePlayerType(dataJSON.player, true)
        )
    } else if (dataJSON.player === "player2") {
        dispatch(
            updatePlayer2(dataJSON.myId, true)
        )
        dispatch(
            updatePlayerType(dataJSON.player, true)
        )
    } else if (dataJSON.player === "player0") {
        alert("El juego esta lleno")
        dispatch(
            updatePlayerType(dataJSON.player, true)
        )
    }
})

socketClient.on('startGame', (data) => {
    if (data === "true") {
        dispatch(
            updateGameState(true, true)
        )
    }
})

socketClient.on('updateTurn', (data) => {
    console.log(`Se actualizo el turno a: ${data}`)
    dispatch(
        updateTurn(data, true)
    )
})