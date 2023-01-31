const express = require("express");
const expressHandlebars = require("express-handlebars");

const handler = require("./lib/handlers.js"); // 모듈화

const app = express();

// configure Handlebars view engine
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", handler.home);

app.get("/about", handler.about);

// custom 404 page
app.use(handler.notFound);

// custom 500 page
app.use(handler.serverError);

// app.listen(port, () => {
//     console.log(
//         `Express started on http://localhost:${port} press Ctrl-C to terminate.`
//     );
// });

// 통합 테스트위해 app.listen 수정
if (require.main === module) {
    app.listen(port, () => {
        console.log(
            `Express started on http://localhost:${port} press Ctrl-C to terminate.`
        );
    });
} else {
    module.exports = app;
}
