module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            "./*.spec.js"
        ],
        exclude: [
            "./node_modules"
        ],
        preprocessors: {},
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome']
    });
};
