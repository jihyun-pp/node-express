const express = require("express");
const app = express();

/**
 * 응답 헤더
 * 일반적으로 메타데이터와 서버 정보가 들어 있음
 * 서버 타입이나 OS 정보가 들어있는 서버 정보 >> X-Powered-By 헤더를 비활성화하면 서버 정보를 숨길 수 있음
 */

app.disable("x-powered-by");

app.get("*", (req, res) => {
    res.send(
        "Open your dev tools and examine your headers you'll notice there is no x-powered-by header!"
    );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`));
