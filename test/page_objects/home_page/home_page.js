const AbstractPage = require('../abstract_page/abstract_page');

class HomePage extends AbstractPage {
  constructor() {
    super();
    this.Url = 'https://www.indiegogo.com';
  }
  open() {
    return super.open(this.Url);
  }
}

module.exports = HomePage;