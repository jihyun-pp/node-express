const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();

const port = process.env.PORT || 3000;

// 핸들바 뷰 엔진 설정
app.engine(
    "handlebars",
    expressHandlebars({
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");

// 뷰 변경
app.get("/", (req, res) => res.render("home"));

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
app.get("/about", (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", { fortune: randomFortune });
    // 뷰의 동적 컨텐츠
});

app.use(express.static(__dirname + "/public"));

// custom 404 page
app.use((req, res) => {
    res.status(400);
    res.render("404");
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render("500");
});

app.listen(port, () => {
    console.log(
        `Express started on http://localhost:${port} press Ctrl-C to terminate.`
    );
});
