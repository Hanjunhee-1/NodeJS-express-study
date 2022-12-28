const express = require("express");
const app = express();

// 템플릿 엔진이 적용된 페이지 소스를 이쁘게 보기 위해서 사용한 코드
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.get("/", (req, res) => {
    res.send("<h1>메인 페이지</h1>");
})

app.get("/template", (req, res) => {
    res.render('index', {
        time: Date(),
        _title: "Template Engine (Jade)"
    });
})

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`));