'use strict';

var menuDirectiveModule = angular.module('menuDirective',[]);

menuDirectiveModule.directive('leftMenuList',
	function(menu){
			return {
			restrict : 'A',
			replace : true,
			templateUrl : './tpl/left-menu.html',
			scope : {},
			controller : function($scope,$element){
				menu.menuData('left').then(
					function(resp){
						$scope.menus = resp.data;
					}
				);
			}
		};
	}
);

menuDirectiveModule.directive('headMenuList',
	function(menu){
			return {
			restrict : 'A',
			replace : true,
			templateUrl : './tpl/head-menu.html',
			scope : {},
			controller : function($scope,$element){
				menu.menuData('head').then(
					function(resp){
						$scope.links = resp.data;
					}
				);
			}
		};
	}
);