const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

// 2.5.4 정적 자원 전송
// HTML, 로고 이미지 전송 > 일반적으로 바뀌지 않기 때문에 정적 자원이라고 함
// 큰 프로젝트에서는 NGINX (proxy server), 도는 CDN을 통해 전송하는 편이 나음

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        // fs.readFile : 파일을 비동기적으로 읽음 <-> fs.readFileSync
        //               콜백 패턴 사용 -> 함수가 실행을 마쳤을 때 콜백 함수 호출됨
        // __dirname : 현재 실행중인 디렉토리 경로
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("500 - Internal Error");
        }
        res.writeHead(responseCode, { "Content-Type": "text/plain" });
        res.end(data);
    });
}

const server = http.createServer((res, req) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase(); // url 정규화 (쿼리스트링 무시)
    switch (path) {
        case "":
            serveStaticFile(res, "/public/home.html", "text/html");
            break;
        case "/about":
            serveStaticFile(res, "/public/about.html", "text/html");
            break;
        case "/img/logo.png":
            serveStaticFile(res, "/public/img/logo.png", "image/png");
            break;
        default:
            serveStaticFile(res, "/public/404.html", "text/html", 404);
            break;
    }
});

server.listen(port, () => {
    console.log(`server started on port ${port} press Ctrl-C to terminate`);
});
