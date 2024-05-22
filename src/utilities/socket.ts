import { io } from "socket.io-client";
import { dispatch } from "../store";
import { updateMyId, updatePlayer1 } from "../store/actions";

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
    }
})