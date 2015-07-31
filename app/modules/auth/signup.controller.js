angular
  .module('app.auth')
  .controller('SignUpController', SignUpController);

function SignUpController(Auth, $state) {
  let vm = this;
  vm.submit = submit;

  function submit(params) {
    Auth.signup(params).then(response => {
      $state.go('dashboard');
    }).catch(err => {
      alert('Try again!');
    });
  }
}