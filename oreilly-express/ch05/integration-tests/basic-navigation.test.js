const portfinder = require("portfinder");
const puppeteer = require("puppeteer");

const app = require("../meadowlark.js");

let server = null;
let port = null;

// beforeAll
beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
});

// afterAll
afterEach(() => {
    server.close();
});

test("home page links to about page", async () => {
    // eslint-disable-next-line no-unused-vars
    const browser = await puppeteer.launch();
});
