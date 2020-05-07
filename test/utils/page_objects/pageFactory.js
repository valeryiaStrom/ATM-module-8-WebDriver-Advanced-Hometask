const HomePage = require("./home_page/home_page");
const SearchResultsPage = require("./search_results_page/search_results_page");
const AbstractPage = require("./abstract_page/abstract_page");

class PageFactory {
  static async getPage() {
    let currentUrl = await browser.getCurrentUrl();
    switch (true) {
      case currentUrl === 'https://www.indiegogo.com/':
        return new HomePage();
      case !currentUrl.includes('http'):
        return new HomePage();
      case currentUrl.includes('beauty'):
        return new SearchResultsPage();
      default:
        return new AbstractPage();
    }
  }
}

module.exports = PageFactory;
