const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("<h1>Dynamic or Static</h1>");
})

app.get("/dynamic", (req, res) => {
    var lis = ''
    for (var i=0; i<5; i++) {
        lis = lis + '<li>coding' + (i+1) + '</li>';
    }
    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic
        <ul>
            ${lis}
        </ul>
    </body>
    </html>`
    res.send(output);
})

app.get("/static", (req, res) => {
    res.redirect("http://localhost:3000/static.html");
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
})