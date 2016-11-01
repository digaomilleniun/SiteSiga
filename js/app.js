(function() {
    var app = angular.module('myApp',  ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {

        // remove o # da url
       // $locationProvider.html5Mode(true);

        $routeProvider

            // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
        // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'

            .when('/home', {
                templateUrl : 'views/home.html',
                controller     : 'HomeCtrl',
            })

            .when('/agendamento_automatico', {
                templateUrl : 'views/agendamento_automatico2.html',
                controller     : 'AgendAutomaticoCtrl',
            })

            .when('/agendamento_automatico/:etapa', {
                templateUrl : 'views/agendamento_automatico2.html',
                controller     : 'AgendAutomaticoEtapaCtrl',
            })

            .when('/PaginaNaoEncontrada', {
                templateUrl : 'views/pagina_nao_encontrada.html',
                controller     : 'PaginaNaoEncontradaCtrl',
            })

            .when('/apac', {
                templateUrl : 'views/apac.html',
                controller     : 'ApacCtrl',
            })

            .when('/apac/:funcionalidade/:query', {
                templateUrl : 'views/apac.html',
                controller     : 'ApacFuncionalidadeCtrl',
            })

            .when('/bpa', {
                templateUrl : 'views/bpa.html',
                controller     : 'BPAFuncionalidadeCtrl',
            })

            .when('/bpa/:funcionalidade/:query', {
                templateUrl : 'views/bpa.html',
                controller     : 'BPAFuncionalidadeCtrl',
            })

            .when('/bpa/:funcionalidade/:query/:layout', {
                templateUrl : 'views/bpa.html',
                controller     : 'BPAFuncionalidadeCtrl',
            })


            // caso não seja nenhum desses, redirecione para a rota '/'
            .otherwise ({ redirectTo: '/PaginaNaoEncontrada' });

    });

    app.controller('HomeCtrl', function ($scope, $location) {
        $scope.activetab = $location.path();

    });

    app.controller('AgendAutomaticoCtrl', function ($scope, $location) {
        $scope.activetab = $location.path();
    });

    app.controller('AgendAutomaticoEtapaCtrl', function ($scope, $location, $routeParams) {
        $scope.etapa = $routeParams.etapa;
    });

    app.controller('PaginaNaoEncontradaCtrl', function ($scope, $location, $routeParams) {
        $scope.activetab = $location.path();
    });

    app.controller('ApacCtrl', function ($scope, $location) {
        $scope.activetab = $location.path();
    });

    app.controller('ApacFuncionalidadeCtrl', function ($scope, $location, $routeParams) {
        $scope.funcionalidade = $routeParams.funcionalidade;
        $scope.query = $routeParams.query;
    });

    app.controller('BPAFuncionalidadeCtrl', function ($scope, $location, $routeParams) {
        $scope.funcionalidade = $routeParams.funcionalidade;
        $scope.query = $routeParams.query;
    });

    app.controller('BPAFuncionalidadeLayoutCtrl', function ($scope, $location, $routeParams) {
        $scope.funcionalidade = $routeParams.funcionalidade;
        $scope.query = $routeParams.query;
        $scope.layout = $routeParams.layout;
    });


})();

