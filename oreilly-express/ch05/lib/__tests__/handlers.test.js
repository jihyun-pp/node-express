// 제스트 테스트하는 방법 (2가지 중 하나만 사용해도 무방)
// 1. __tests__ 디렉토리 하위에서 관리
// 2. .test.js 확장자 사용

const handler = require("../handlers");

// npm test 실행하면 됨
test("home page renders", () => {
    const req = {};
    const res = { render: jest.fn() }; // jest.fn() : 렌더링 함수 생성하는 메서드, 어떻게 호출됐는지 추적하는 범용 모형 함수
    handler.home(req, res);
    expect(res.render.mock.calls.length).toBe(1); // jest의 모형 함수는 자신이 호출되었을 때를 항상 추적, 한 번 호출되었는지 확인하는 기능
    expect(res.render.mock.calls[0][0]).toBe("home"); // 호출했을 때 전달받은 매개변수 중 첫번째
});

/// TIP : 코드를 지켜보다 수정되면 자동으로 테스트하는 모니터링(watch) 모드가 존재 > npm test --watch

test("about page renders with fortune", () => {
    const req = {};
    const res = { render: jest.fn() };
    handler.about(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("about");
    expect(res.render.mock.calls[0][1]).toEqual(
        expect.objectContaining({ fortune: expect.stringMatching(/\W/) }) // 어서션 추가 > 찾아보기
    );
});

test("404 handler renders", () => {
    const req = {};
    const res = { render: jest.fn() };
    handler.notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("404");
});

test("500 handler renders", () => {
    const err = new Error("some error");
    const req = {};
    const res = { render: jest.fn() };
    const next = jest.fn();
    handler.serverError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("500");
});
