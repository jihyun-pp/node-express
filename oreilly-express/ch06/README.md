# CH06 요청과 응답 객체

## Express Document

-   https://github.com/expressjs/express
-   https://expressjs.com/ko/4x/api.html

## URL

-   http://localhost:3000/about?test=1#history
-   프로토콜 : 요청을 어떻게 전송할 지 결정
-   호스트 : 서버와 같음
-   포트
-   경로
-   쿼리스트링
-   해시(hash or fragment) : 서버로 전송되지 않으며 브라우저에서만 사용 / 일부 단일 페이지 애플리케이션은 내부의 내비게이션 용도로 사용

## HTTP 요청 메소드

-   GET

    -   클라이언트에서 서버로 어떠한 리소스로 부터 정보를 요청하기 위해 사용되는 메서드
    -   특징
        -   캐시가 가능함. HTTP 헤더에서 Cache-Control 헤더를 통해 캐시 옵션을 지정 가능
        -   브라우저 히스토리에 남으며, 북마크가 가능함.
        -   데이터를 요청할 때만 사용되고 웹사이트의 페이지 대부분은 GET 요청에 반응함.

-   POST

    -   클라이언트에서 서버로 리소스를 생성하거나 업데이트하기 위해 데이터를 보낼 때 사용되는 메서드
    -   전송할 데이터를 HTTP 메서드 body에 담아 서버에 요청함. Content-Type 헤더에 따라 결정됨.
    -   특징
        -   캐시되지 않고 브라우저 히스토리에 남지 않음.
        -   데이터 길이에 제한이 없음.

-   PUSH
-   DELETE

## 인터넷 미디어 타입

-   Content-Type 헤더
    -   Content-Type 헤더 형식은 타입, 서브타입, 옵션인 매개변수로 구성된 인터넷 미디어 타입
