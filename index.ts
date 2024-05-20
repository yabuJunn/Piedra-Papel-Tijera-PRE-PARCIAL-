import { httpServer } from "./server/socket"

const port = 5500

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})