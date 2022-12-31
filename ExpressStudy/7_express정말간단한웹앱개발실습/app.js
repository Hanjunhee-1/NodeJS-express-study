const fs = require("fs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.redirect("http://localhost:3000/topic");
});

// 바로 아래 route 와 겹치지만 위에서부터 실행하기 때문에 /topic/new 는 이걸 실행하게 됨
app.get("/topic/new", (req, res) => {
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error X(');
        }
        res.render('new', {topics: files});
    })
})

app.get(["/topic", "/topic/:title"], (req, res) => {
    var title = req.params.title;
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error X(');
        }
        if (title) {
            fs.readFile('./data/' + title, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error X(');
                }
                res.render('view', {
                    topics: files,
                    title: title,
                    description: data
                })
            })
        } else {
            res.render('view', {
                topics: files,
                title: 'Welcome',
                description: 'Hello :) JavaScript for server'
            })
        }
    })
})

app.post("/topic", (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/' + title, description, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error X(');
        }
        res.render('success');
    })
})

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`));