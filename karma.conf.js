const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec'],
    files: [
      {pattern: 'test/*.test.js', watched: false},
      {pattern: 'test/**/*.test.js', watched: false}
    ],
    preprocessors: {
      'test/*.test.js': ['webpack', 'sourcemap'],
      'test/**/*.test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
