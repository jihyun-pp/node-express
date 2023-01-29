# Chapter 3

# 스캐폴딩 (scaffolding)

-   boilerplate
-   express-generator : https://expressjs.com/en/starter/generator.html

# 메도라크 여행사 웹사이트 예제

### app.get

-   라우트를 추가하는 메서드
-   app.METHOD > METHOD는 HTTP 동사가 들어갈 자리 (get, post 등)
-   경로와 함께 두 가지 매개변수를 받음

    1. 경로 : 라우트 > 대소문자 구분 X, 경로 끝에 슬래시가 있든 없든 똑같이 동작, 쿼리스트링 무시
    2. 함수 : 라우트가 일치할 때 호출할 함수

-   res.send : 노드의 저수준 메서드 res.end 대신 익스프레스 확장 버전
-   res.status : res.writeHead, res.set
-   res.type : 헤더의 Content-Type 설정

### app.use

-   미듣웨어와 관련있는 메서드
-   일종의 폴백(catch-all) 핸들러
-   익스프레스에서는 라우트와 미들웨어의 순서가 중요함
    > 404 핸들러를 라우트보다 먼저 장성하면 라우트로 가지 않고 404 페이지로 연결됨
    > 익스프레스의 라우트는 url 정규화 제공

### view layout

-   handlebar template framework : 퍼그에 비해 추상화가 덜 되어 있음

    ```
    npm install express-handlebars@3
    ```

### static middleware

-   익스프레스는 미들웨어를 사용해 정적 파일과 뷰를 처리함. 미들웨어를 통해 기능을 모듀로하해 요청을 쉽게 처리할 수 있음.
-   static 미들웨어는 하나 이상의 디렉토리를 지정하여 정적 자원을 보관하고 변화없이 클라이언트에 바로 전송함.
-   디렉토리에는 이미지, css, client side js 파일이 들어감.
-   전송하려는 스태틱 파일 각각에 파일을 렌더링하고 클라이언트에 반환하는 라우트를 지정한 것과 효과가 같음.
