const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();

/**
 * 콘텐츠 렌더링
 * 뷰를 레이아웃 안에 렌더링 하는 res.render를 가장 자주 사용함.
 */
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("*", (req, res) =>
    res.send('check out our "<a href="/about">About</a>" page!')
);

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`\nnavigate to http://localhost:${port}/about\n`)
);
