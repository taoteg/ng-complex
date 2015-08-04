angular
  .module('app.auth')
  .config(routes);

function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      parent: 'root',
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'modules/auth/login.template.html'
    })
    .state('signup', {
      parent: 'root',
      url: '/signup',
      controller: 'SignUpController as vm',
      templateUrl: 'modules/auth/signup.template.html'
    });
}