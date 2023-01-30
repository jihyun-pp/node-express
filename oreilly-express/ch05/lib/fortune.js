// 모듈화 & 캡슐화
const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};

// 전역 변수 exports
// 모듈 바깥에서 모듈 내용보기 위함
