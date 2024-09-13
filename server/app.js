import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const port = 3000;
const app = express();

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.send("Hello, World! Server is running! ");
});

io.on("connection", (socket) => {
    console.log("User Connected");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
