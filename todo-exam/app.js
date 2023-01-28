var express = require("express");
var http = require("http");
var routes = require("routes");
var path = require("path");
var todo = require("./routes/todo");

var app = express(); // 어플리케이션 생성
var port = 3000; // 서버 포트

// 애플리케이션 설정
app.configure(function () {
  app.set("port", port);
  app.set("views", __dirname + "/views");
  app.set("view engine", "ejs");
  app.use(express.favicon());
  app.use(express.logger("dev"));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router); // 라우팅

  // 정적 리소스 처리
  app.use(require("stylus").middleware(__dirname) + "/public");
  app.use(express.static(path.join(__dirname, "public")));
});

app.configure("development", function () {
  app.use(express.errorHandler()); // 에러 메시지
});

// 라우팅
app.get("/", routes.index);
app.get("/list", todo.list);
app.post("/add", todo.add);
app.post("/complete", todo.complete);
app.post("/del", todo.del);

// 서버 실행
http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
