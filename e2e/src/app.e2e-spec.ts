import { AppPage } from './app.po';
import { browser, logging, ElementFinder, element, By } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should return results', () => {
    page.navigateTo();
    element(By.tagName('input')).sendKeys("Alpha");
    element(By.tagName('button')).click();
    browser.driver.sleep(3000);
    let resultsCount = element.all(By.className('card')).count();
    console.log("found cards count: " + resultsCount)
    expect(resultsCount).toBeGreaterThan(0);
  });

  it('should display film images', () => {
    page.navigateTo();
    element(By.tagName('input')).sendKeys("Alpha");
    element(By.tagName('button')).click();
    browser.driver.sleep(8000);
    let results = element.all(By.className('card-img-top'));
    console.log("found images count: " + results.count())
    expect(results.count()).toBeGreaterThan(0);
  });

  it('should display film titles', () => {
    page.navigateTo();
    element(By.tagName('input')).sendKeys("Alpha");
    element(By.tagName('button')).click();
    browser.driver.sleep(8000);
    let results = element.all(By.className('card-title'));
    console.log("found cards title count: " + results.count())
    expect(results.count()).toBeGreaterThan(0);
  });

  it('should navigate to imdb on click', () => {
    page.navigateTo();
    element(By.tagName('input')).sendKeys("Alpha");
    element(By.tagName('button')).click();
    let results = element(By.className('card'));
    results.click();
    browser.driver.sleep(8000);

    browser.getAllWindowHandles().then(function (handles) {
      expect(handles.length).toEqual(2);
      browser.switchTo().window(handles[1]).then(function () {
       expect(browser.driver.getCurrentUrl()).toContain('imdb.com');
      });
     });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
