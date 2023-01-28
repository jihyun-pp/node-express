const http = require("http");
const port = process.env.PORT || 3000;

// 2.5.3 라우팅
// routing : 클라이언트가 요청한 컨텐츠를 전송하는 매커니즘

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase(); // url 정규화 (쿼리스트링 무시)
    switch (path) {
        case "":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("About");
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
            break;
    }
});

server.listen(port, () => {
    console.log(`server started on port ${port} press Ctrl-C to terminate`);
});
