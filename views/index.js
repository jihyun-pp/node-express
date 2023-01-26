// 라우팅 핸들러 1
// 홈페이지 접속 요청을 처리하는 핸들러

exports.index = function (req, res) {
  res.render("index", { title: "ToDo 예제 클론 코딩" });
};
