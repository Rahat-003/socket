import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    x = 3;
    hello = 10;
    res.send("Hello, World! Server is running!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
