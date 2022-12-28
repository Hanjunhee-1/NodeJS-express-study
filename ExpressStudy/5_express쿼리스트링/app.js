const express = require("express");
const app = express();

var topics = ["HTML5", "CSS", "JavaScript"];
var stacks = [
    "NodeJS: 가장 자유도가 높은 개발 스택. 자유도가 높은 것이 장점이지만 그것이 오히려 단점으로 작용하여 협업에서 시간적인 비용 혹은 유지 및 보수에 어려움을 겪을 수 있음", 
    "NestJS: 짜임새가 갖춰져 있는 개발 스택. 틀이 잡혀있기 때문에 NodeJS 의 express 를 사용하여 작업하는 것보다 유지보수가 훨씬 쉽고 협업에서도 장점이 많음.", 
    "SpringBoot: NestJS 와 마찬가지로 짜임새가 갖춰져 있는 개발 스택. 이것을 잘하면 멋있음."
];

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.get("/", (req, res) => {
    let data = `
        <html>
            <head>
                <title> 메인 페이지 </title>
            </head>
            <body>
                <h1>여기는 메인 페이지입니다.</h1>
                <br>
                <h2><p>원하시는 링크를 클릭해주세요</p></h2>
                <a href="http://localhost:3000/topic">topic 에 대한 링크</a><br>
                <a href="http://localhost:3000/stacks">stack 에 대한 링크</a>
            </body>
        </html>
    `
    res.send(data);
})

app.get("/topic", (req, res) => {
    if (req.query.id > 2 || req.query.id < 0 || !req.query.id) res.send("쿼리스트링에 올바른 id 값을 입력해주세요!<br> 예시: http://localhost:3000/topic?id=0");
    else res.render('index', {userInput: req.query.id, topics: topics[req.query.id]});
})

app.get("/stacks", (req, res) => {
    if (!req.query.id) 
        res.render('stack', {output: "환영합니다!"});
    else if (req.query.id < 0 || req.query.id > 2) 
        res.render('stack', {output: "id 값의 범위는 0~2 입니다."});
    else
        res.render('stack', {output: stacks[req.query.id]});
})

app.listen(3000);