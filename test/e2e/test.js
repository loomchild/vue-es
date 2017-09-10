module.exports = {
  'dummy test': (browser) => {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#logo')
      .end()
  }
}
