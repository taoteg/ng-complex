angular
  .module('app.shared')
  .config(routes);

function routes($stateProvider) {
  $stateProvider
    .state('main', {
      parent: 'root',
      abstract: true,
      url: '',
      controller: 'SharedController as shared',
      templateUrl: 'shared/main.template.html',
      resolve: {
        authCheck: (Auth, $location) => {
          if (!Auth.current()) {
            $location.path('/login');
          }
        }
      }
    });
}