module.exports = {
  'send and search test': (browser) => {
    const expectedDate = new Date()
    browser.url(browser.globals.url)
    browser.waitForElementVisible('#send', 5000)

    browser.click('#send button')
    browser.pause(1000)

    browser.setValue('#search input', 'chrome')
    browser.click('#search button')
    browser.waitForElementVisible('#search table tbody tr:first-child', 1000)

    browser.getText('#search table tbody tr:first-child td:first-child', timestamp => {
      const actualDate = new Date(Date.parse(timestamp.value))
      browser.assert.ok(actualDate - expectedDate > 0, 'Event found')
    })

    browser.end()
  }
}
