(function () {
  'use strict';

  angular
    .module('my-app', [])
    .controller('myCtrl', myCtrl);

  function myCtrl() {
    vm = this;
    vm.title = 'Angular1';
    vm.list = [];
  }

  myCtrl.prototype.add = function () {
    vm.list.push(vm.title);
    vm.title = '';

    console.log(vm.list);
  }

  var vm;

})();
