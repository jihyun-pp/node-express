const express = require("express");
const app = express();

/**
 * 요청 헤더 정보 : req.headers
 */

app.get("/headers", (req, res) => {
    res.type("text/plain");
    const headers = Object.entries(req.headers).map(
        ([key, value]) => `${key}: ${value}`
    );
    res.send(headers.join("\n"));
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`\nnavigate to http://localhost:${port}/headers\n`)
);
