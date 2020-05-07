const expect = require('chai').expect;
const PageFactory = require('../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;

describe('campaigns search', function() {
  let seacrhQuery = 'beauty';

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });

  it('should have at least 1 beauty campaign in search results', async function () {
    let currentPage;
    currentPage = await PageFactory.getPage();
    await currentPage.open();
    currentPage = await PageFactory.getPage();
    currentPage.header.performSearchByQuery(seacrhQuery);
    currentPage = await PageFactory.getPage();
    const firstSearchResult = currentPage.searchResults.getElementByIndex(0);
    await browser.wait(EC.elementToBeClickable(firstSearchResult), 20000);
    currentPage = await PageFactory.getPage();
    const countOfResults = await currentPage.searchResults.countItems();
    expect(countOfResults).to.be.at.least(1);
  });
});