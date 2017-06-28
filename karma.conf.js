module.exports = function (config) {
  config.set({
    basePath: './',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'karma-typescript'],
    reporters: ['progress', 'karma-typescript'],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [
          require('karma-typescript-angular2-transform'),
        ]
      },
      compilerOptions: {
        lib: ['ES2015', 'DOM']
      },
      coverageOptions: {
        exclude: [/(\/test\/.*|\.d)\.ts/i]
      }
    },
    files: [
      'node_modules/core-js/client/core.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      { pattern: 'src/**/*.ts', included: true, watched: true },
      { pattern: 'test/**/*.ts', included: true, watched: true },
    ],
    colors: true,
    logLevel: config.LOG_INFO
  })
}
