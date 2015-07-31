angular
  .module('app.dashboard')
  .config(routes);

function routes($stateProvider) {
  $stateProvider
    .state('dashboard', {
      parent: 'main',
      url: '/',
      controller: 'DashboardController as vm',
      templateUrl: 'modules/dashboard/index.template.html',
      resolve: {
        items: (List) => List.items().then(res => res.data)
      }
    });
}