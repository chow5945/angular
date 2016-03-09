/**
 * @author zhoulei
 * @since 2016-02-24 10:23
 * @desc angular嵌套路由演示示例
 **/

'use strict';

var UnionPayApp = angular.module('UnionPay',['ui.router','menuDirective','multiSelectDirective','menuService','multiSelectService','UnionPay.query']);

UnionPayApp.run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

UnionPayApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('/','').otherwise('/index');
	$stateProvider.state('index.trade',{
		url:'/trade',
		views:{
			'body@index':{
				templateUrl:'./tpl/trade.html'
			}
		}
	}).state('index.config',{
		url:'/config',
		views:{
			'body@index':{
				templateUrl:'./tpl/config.html'
			}
		}
	});
}]);

angular.module('UnionPay.query',['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('index',{
		url:'/index',
		views:{
			'':{
				templateUrl:'./tpl/main.html'
			},
			'head@index':{
				templateUrl:'./tpl/head.html'
			},
			'body@index':{
				templateUrl:'./tpl/body.html'
			},
			'foot@index':{
				templateUrl:'./tpl/foot.html'
			}
		}
	}).state('index.query',{
		url:'/query',
		views:{
			'body@index':{
				templateUrl:'./tpl/query.html'
			}
		}
	}).state('index.query.query-edit',{
		url:'/query-edit',
		templateUrl:'./tpl/content1.html'
	}).state('index.query.my-query',{
		url:'/my-query',
		templateUrl:'./tpl/content2.html'
	});
}]);
