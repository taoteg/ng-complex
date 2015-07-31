angular
  .module('app.shared')
  .controller('SharedController', SharedController);

function SharedController(Auth, $state) {
  let vm = this;
  vm.logout = logout;

  function logout() {
    Auth.logout();
    $state.go('login');
  }
}