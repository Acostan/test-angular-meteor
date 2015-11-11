if(Meteor.isClient) {

    angular.module('main.module', ['angular-meteor', 'ui.router', 'modulo']);
    angular.element(document).ready(onReady);

    function onReady() {
        angular.bootstrap(document, ['main.module'], {
            strictDi: true
        });
    }
}