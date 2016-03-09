'use strict';

var menuServiceModule = angular.module('menuService',[]);

menuServiceModule.factory('menu',['$http',
	function($http){
		var loadMenuData = function(position){
			return $http({method:'get',url:'./data/'+position+'-menu.json'});
		};
		return {
			menuData : function(position){
				return loadMenuData(position);
			}
		};
	}
]);
