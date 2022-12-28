const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get("/test", (req, res) => {
    res.sendFile(__dirname + '/views/test.html');
})

app.listen(3000);