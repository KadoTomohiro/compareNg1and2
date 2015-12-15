(function() {

  var AppComponent = ng
    .Component({
      selector: 'my-app',
      directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES],
      templateUrl: 'component.html'
    })
    .Class({
      constructor: function() {
        this.title = 'Angular2';
        this.list = [];
      },
      add: function() {
        this.list.push(this.title);
      }
    });
  document.addEventListener('DOMContentLoaded', function() {
    ng.bootstrap(AppComponent);
  });
})();
