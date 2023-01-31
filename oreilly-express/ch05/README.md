# Chapter 5

## 1. QA

## 테스트 프레임워크

-   https://mochajs.org/
-   https://jasmine.github.io/
-   https://jestjs.io/

    ```
    npm install --save-dev jest@25
    ```

    -   --save-dev : 해당 패키지가 개발 단계에서만 사용하는 패키지이며 애플리케이션 자체의 동작에는 필요하지 않다는 의미
    -   jest 실행을 위해 package.json 에 설정 추가

## 단위 테스트

-   보통 함수를 테스트함. 단위 테스트는 개발자가 작성함.
-   lib/**test**/~.test.js
-   npm test 실행

## 코드 커버리지 (code coverage)

-   코드 커버리지란 코드를 얼마나 테스트했는가에 관한 정량적 답변을 의미
-   자동으로 코드 커버리지를 분석하는 툴

    ```
    npm test -- --coverage
    ```

    ```
    -------------|---------|----------|---------|---------|-------------------
    File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    -------------|---------|----------|---------|---------|-------------------
    All files    |     100 |      100 |     100 |     100 |
    fortune.js  |     100 |      100 |     100 |     100 |
    handlers.js |     100 |      100 |     100 |     100 |
    -------------|---------|----------|---------|---------|-------------------
    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        0.556s, estimated 1s
    Ran all test suites.
    ```

## 통합 테스트

-   퍼펫티어 (puppeteer)

    -   제어 가능한 헤드리스 크롬
    -   퍼펫티어 API는 대부분을 Promise를 반환하므로 await 사용
    -   https://pptr.dev/ https://pptr.dev/api

    ```
    npm install --save-dev puppeteer@1
    ```

## 린트

-   ES린트

    -   ES린트는 전역으로 설치하고 자주 업데이트 하면 오래된 프로젝트들이 린트 규칙에 걸리는 일이 자주 생김 >> 프로젝트 단위로 설치 권장함

    ```
    npm install --save-dev eslint@5
    ```
