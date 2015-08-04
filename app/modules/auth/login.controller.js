angular
  .module('app.auth')
  .controller('LoginController', LoginController);

function LoginController(Auth, $state) {
  let vm = this;
  vm.submit = submit;
  vm.testUser = {
    email: 'test@vngrs.com',
    password: 'test'
  };

  function submit(params) {
    Auth.login(params).then(response => {
      $state.go('dashboard');
    }).catch(err => {
      params.password = '';
      alert('Try again!');
    });
  }
}