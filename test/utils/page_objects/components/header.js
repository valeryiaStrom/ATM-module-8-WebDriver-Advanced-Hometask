const Element = require('../base_elements/base_element');

class Header {
  constructor() {
    this.searchIcon = new Element('css', '.layoutHeader-generalHeader-searchButton');
    this.searchField = new Element('css', 'form .layoutHeader-searchBar-input');
  }
  async performSearchByQuery(searchQuery) {
    this.searchIcon.click();
    this.searchField.sendInput(searchQuery);   
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
}

module.exports = Header;
