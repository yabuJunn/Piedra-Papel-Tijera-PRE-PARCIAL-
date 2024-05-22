import { io } from "socket.io-client";
import { dispatch } from "../store";
import { updateMyId } from "../store/actions";

const socketClient = io("http://localhost:5500")

socketClient.on('initializePlayer', (data) => {
    dispatch(
        updateMyId(data, true)
    )
})