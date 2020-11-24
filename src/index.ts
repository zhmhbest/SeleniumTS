import {Builder, By, Key, until} from "selenium-webdriver";

(async function() {
    const driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://www.baidu.com');
    driver.findElement(By.id('kw')).sendKeys('Selenium');
    driver.findElement(By.id('su')).click();
    await driver.wait(until.titleIs('Selenium_百度搜索'), 1000);
    driver.quit();
})();
