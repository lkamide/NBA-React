const {Builder, By, Key, until} = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
// let firefox = require('selenium-webdriver/firefox')


(async function example() {
    // const chromeOptions = new chrome.Options();
    //   chromeOptions.addArguments("--blink-settings=imagesEnabled=false");
  // var firefoxOptions = new firefox.Options();

  //   firefoxOptions.adaddArguments("--no-sandbox");
  //   firefoxOptions.addArguments("--headless");
    // // firefoxOptions.setChromeBinaryPath('/home/travis/build/lkamide/NBA-React/chromeData/chromedriver')
    // firefoxOptions.addArguments("test-type");
    // firefoxOptions.addArguments("start-maximized");
    // firefoxOptions.addArguments("--js-flags=--expose-gc");
    // firefoxOptions.addArguments("--single-process");
    // firefoxOptions.addArguments("--enable-precise-memory-info");
    // firefoxOptions.addArguments("--disable-popup-blocking");
    // firefoxOptions.addArguments("--disable-default-apps");
    // firefoxOptions.addArguments("--disable-infobars");
    // firefoxOptions.addArguments("--disable-dev-shm-usage");


  var chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--no-sandbox");
    chromeOptions.addArguments("--headless");
    // chromeOptions.setChromeBinaryPath('/home/travis/build/lkamide/NBA-React/chromeData/chromedriver')
    chromeOptions.addArguments("test-type");
    chromeOptions.addArguments("start-maximized");
    chromeOptions.addArguments("--js-flags=--expose-gc");
    chromeOptions.addArguments("--single-process");
    chromeOptions.addArguments("--enable-precise-memory-info");
    chromeOptions.addArguments("--disable-popup-blocking");
    chromeOptions.addArguments("--disable-default-apps");
    chromeOptions.addArguments("--disable-infobars");
    chromeOptions.addArguments("--disable-dev-shm-usage");
    

  let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build();
  
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  
  console.log('---------')
  console.log('111111111')
  console.log('---------')
  }catch(err){
    console.log('---------')
    console.log('Nao Passou')
    console.log(err)
    console.log('---------')
  }finally {
    await driver.quit();
    console.log('---------')
    console.log('Finalllll')
    console.log('---------')
  }
})();