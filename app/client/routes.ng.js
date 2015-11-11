angular.module("main.module").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider

        .state('index', {
            url: '/index',
            //template: '<div> hi</div>',
            templateUrl: 'test_package_packages/test-package/lib/index.ng.html'
        })
    ;
});