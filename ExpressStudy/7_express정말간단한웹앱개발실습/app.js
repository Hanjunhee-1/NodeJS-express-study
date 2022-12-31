const fs = require("fs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.redirect("http://localhost:3000/topic");
});

app.get("/topic", (req, res) => {
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error X(');
        }
        res.render('view', {topics: files});
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

app.get("/topic/:id", (req, res) => {
    const id = req.params.id;
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error X(');
        }
        fs.readFile('data/' + id, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error X(');
            }
            res.render('view2', {topics:files, title:id, description:data});
        })
    })
})

app.get("/topic/new", (req, res) => {
    res.render('new');
})

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`));