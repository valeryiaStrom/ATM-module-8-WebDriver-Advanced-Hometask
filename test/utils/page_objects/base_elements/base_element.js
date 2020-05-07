class Element {
  constructor(selectorType, locator) {
    switch (selectorType) {
      case 'css':
        this.element = element(by.css(locator));
        break;
      case 'xpath':
        this.element = element(by.xpath(locator));
        break;
      case 'id':
        this.element = element(by.id(locator));
        break;
      default:
        throw new Error(`Selector type [${selectorType}] is not recognized. Try to use one of the following selector types: css, xpath, id.`);
    }
  }
  click() {
    return browser.actions().click(this.element).perform();
  }
  sendInput(input) {
    return browser.actions().mouseMove(this.element).sendKeys(input).perform();
  }
}

module.exports = Element;