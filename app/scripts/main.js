require.config({
  baseUrl: 'scripts/',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular'           : 'ext/angular',
    'angular-ui-router' : 'ext/angular-ui-router',
    'angularAMD'        : 'ext/angularAMD',
    'ngload'            : 'ext/ngload',
    'bootstrap'         : 'ext/bootstrap',
    'jquery'            : 'ext/jquery'
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angularAMD'        : [ 'angular' ],
    'bootstrap'         : [ 'jquery' ],
    'ngload'            : [ 'angularAMD' ],
    'angular-ui-router' : [ 'angular' ]
  },

  // kick start application
  deps: ['app']
});
