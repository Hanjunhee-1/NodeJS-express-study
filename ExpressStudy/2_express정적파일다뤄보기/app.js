const express = require("express");
const app = express();

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello<h1>");
})

app.get("/jjang-gu", (req, res) => {
    res.send('신짱구<img src="Crayon_Shin_JJang.jpg">');
})

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
})

// app.listen(3000);