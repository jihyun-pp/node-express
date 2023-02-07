const express = require("express");
const { engine } = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const catNames = require("cat-names");
const app = express();

// 뷰에 쿼리스트링, 쿠키, 세션 값 등의 콘텍스트 전달

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(cookieParser());

// 세션 객체
app.use(
    session({ resave: false, saveUninitialized: false, secret: "keyboard cat" })
);

app.get("/greeting", (req, res) => {
    res.render("greeting", {
        message: "Hello",
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username,
    });
});
app.get("/set-random-userid", (req, res) => {
    let user_id = (Math.random() * 10000).toFixed(0);
    res.cookie("userid", user_id); // 클라이언트에 저장될 쿠기를 설정하거나 삭제
    res.redirect("/greeting");
});

app.get("/set-random-username", (req, res) => {
    req.session.username = catNames.random();
    res.redirect("/greeting");
});

app.get("*", (Req, res) =>
    res.send('Check out our <a href="/greeting">greeting</a> page!')
);
// res.send / res.json / res.end 차이점 확인하기

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`\nnavigate to http://localhost:${port}/error\n`)
);
