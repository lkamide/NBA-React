const {Builder, By, Key, until} = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
(async function example() {
  //   const chromeOptions = new chrome.Options();
  // chromeOptions.addArguments("--blink-settings=imagesEnabled=false");

  var chromeOptions = new chrome.Options();
    chromeOptions.addArguments("test-type");
    chromeOptions.addArguments("start-maximized");
    chromeOptions.addArguments("--js-flags=--expose-gc");
    chromeOptions.addArguments("--enable-precise-memory-info");
    chromeOptions.addArguments("--disable-popup-blocking");
    chromeOptions.addArguments("--disable-default-apps");
    chromeOptions.addArguments("--disable-infobars");
    chromeOptions.addArguments("--headless");

  let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build();
  
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();