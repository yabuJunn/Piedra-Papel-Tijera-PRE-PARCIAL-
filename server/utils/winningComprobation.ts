import { database } from "../dataBase"
import { globalSocket } from "../socket"

export const moveFunction = (gameBoxesState: gameBoxesStateType) => {
    database.currentTurn = gameBoxesState.currentTurn

    if (!gameBoxesState.player1Move) {
        database.player2Move = gameBoxesState.player2Move
    }

    if (!gameBoxesState.player2Move) {
        database.player1Move = gameBoxesState.player1Move
    }

    console.log(`El turno es: ${database.currentTurn}`)

    if (database.currentTurn === "player2") {
        database.player2Move = gameBoxesState.player2Move
        console.log(`El turno actualizado es: ${database.currentTurn}`)
        winningComprobation(database.player1Move, database.player2Move)
        setTimeout(() => {
            globalSocket?.emit('updateTurn', 'player1')
        }, 3000)
    }

    if (database.currentTurn === "player1") {
        database.player1Move = gameBoxesState.player1Move
        console.log(`El turno actualizado es: ${database.currentTurn}`)
        setTimeout(() => {
            globalSocket?.emit('updateTurn', 'player2')
        }, 2000) //No le manda el mensaje al player1
    }

    // console.log(database)
}

export interface gameBoxesStateType {
    currentTurn: string | undefined,
    player1Move?: string,
    player2Move?: string
}

function winningComprobation(player1Move: string | undefined, player2Move: string | undefined) {
    if (database.player1Move === "rock") {
        if (database.player2Move === "rock") {
            //Empate
            console.log("empate")
        }
        if (database.player2Move === "paper") {
            //Player 2 gano
            console.log("gano jugador 2")
        }
        if (database.player2Move === "scissors") {
            //Player 1 gano
            console.log("gano jugador 1")
        }
    }

    if (database.player1Move === "paper") {
        if (database.player2Move === "rock") {
            //Empate
            console.log("gano jugador 1")
        }
        if (database.player2Move === "paper") {
            //Player 2 gano
            console.log("empate")
        }
        if (database.player2Move === "scissors") {
            //Player 1 gano
            console.log("gano jugador 2")
        }
    }

    if (database.player1Move === "scissors") {
        if (database.player2Move === "rock") {
            //Empate
            console.log("gano jugador 2")
        }
        if (database.player2Move === "paper") {
            //Player 2 gano
            console.log("gano jugador 1")
        }
        if (database.player2Move === "scissors") {
            //Player 1 gano
            console.log("empate")
        }
    }
}