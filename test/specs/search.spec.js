const expect = require('chai').expect;
const PageFactory = require('../page_objects/pageFactory');
const EC = protractor.ExpectedConditions;
const highlighElementWithJS = require('../utils/helpers/highlight');
const scrollToElement = require('../utils/helpers/scroll');

describe('campaigns search', function() {
  const seacrhQuery = 'beauty';
  const elementToHightlightSelector = '.layoutHeader-generalHeader-searchButton';

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });

  it('should have at least 1 beauty campaign in search results', async function () {
    let currentPage;
    currentPage = await PageFactory.getPage();
    await currentPage.open();
    currentPage = await PageFactory.getPage();
    await browser.executeScript(highlighElementWithJS, elementToHightlightSelector);
    currentPage.header.performSearchByQuery(seacrhQuery);
    currentPage = await PageFactory.getPage();
    const firstSearchResult = currentPage.searchResults.getElementByIndex(0);
    await browser.wait(EC.elementToBeClickable(firstSearchResult), 20000);
    currentPage = await PageFactory.getPage();
    const countOfResults = await currentPage.searchResults.countItems();
    const lastSearchResult = currentPage.searchResults.getElementByIndex(countOfResults - 1);
    await browser.executeScript(scrollToElement, lastSearchResult);
    expect(countOfResults).to.be.at.least(1);
  });
});