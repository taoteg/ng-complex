angular
  .module('app.shared', [
    'ngCookies',
    'LocalStorageModule',
    'app.auth'
  ])
  .config(config);

function config($httpProvider) {
  $httpProvider.interceptors.push('HTTPInterceptor');
}