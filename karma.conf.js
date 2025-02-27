process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // plugins to use
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
        ],

        // frameworks to use
        frameworks: ['jasmine'],

        // start these browsers
        browsers: ['ChromeHeadlessCustom'],

        customLaunchers: {
            ChromeHeadlessCustom: {
                base: 'ChromeHeadless',
                flags: [
                    '--in-process-gpu',
                    '--no-sandbox',
                ]
            }
        },

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'src/cs-assert.provider.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'spec/cs-assert.provider.spec.js',
        ],

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
}
