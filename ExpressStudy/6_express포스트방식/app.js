const express = require("express");
const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send(
        '<h1>메인 페이지입니다.</h1><a href="http://localhost:3000/login">로그인하기</a><br><a href="http://localhost:3000/index">index 페이지 구경가기</a>'
    );
})
app.get("/index", (req, res) => {
    res.render('index', {
        engine: "ejs"
    })
})

app.get("/login", (req, res) => {
    res.render('login_form')
})

app.post("/login_receiver", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    let data = '<h1>' + id + '님 환영합니다!</h1><p>비밀번호는 ' + password + '</p><br><a href="http://localhost:3000/">메인으로 돌아가기</a>';
    res.send(data);
})

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`));