import { state } from "../store"
import { socketClient } from "./socket"

interface gameBoxesStateType {
    currentTurn: string | undefined,
    player1Move?: string,
    player2Move?: string
}

export const makeAMove = (gameBoxesState: gameBoxesStateType) => {
    socketClient.emit('move', gameBoxesState)
}