// entry point = app file
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("Meadowlark Travel");
});

app.get("/about", (req, res) => {
    res.type("text/plain"); // 헤더 Content-Type 설정
    res.send("About Meadowlark Travel"); // 저수준 res.end 대신 send
});

// custom 404 page
app.use((req, res) => {
    res.type("text/plain");
    res.status(400);
    res.send("404 - Not Found");
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error");
});

app.listen(port, () => {
    console.log(
        `Express started on http://localhost:${port} press Ctrl-C to terminate.`
    );
});
