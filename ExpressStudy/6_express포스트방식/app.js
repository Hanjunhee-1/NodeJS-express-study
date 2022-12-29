const express = require("express");
const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.get("/", (req, res) => {
    res.send("<h1>메인 페이지입니다.</h1>");
})

app.get("/index", (req, res) => {
    res.render('index', {
        engine: "ejs"
    })
})

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`));