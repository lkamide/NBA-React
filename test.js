const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

const until = webdriver.until;
const By = webdriver.By;

const options = new chrome.Options();
options.addArguments("no-sandbox");

const builder = new webdriver.Builder();
builder.forBrowser("chrome");
builder.setChromeOptions(options);

const driver = builder.build();
(async () => {
    await driver.get("https://tweetdeck.twitter.com");
    await driver.wait(until.titleIs("TweetDeck"));
    const login = await driver.findElement(By.css("form.form-login a.btn"));
    await login.click();
})();