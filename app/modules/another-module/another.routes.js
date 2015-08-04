angular
  .module('app.another')
  .config(routes);

function routes($stateProvider) {
  $stateProvider
    .state('main.another', {
      url: '/another',
      template: 'Another Page'
    });
}