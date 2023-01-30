// 앱 테스트를 쉽게 하기 위해 라우트 핸드러를 라이브러리로 분리
const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about', {fortune : fortune.getFortune()});

exports.notFound = (req, res) => res.render('404');

exports.serverError = (err, req, res, next) => {
    console.log(err);
    res.render('500');
};
