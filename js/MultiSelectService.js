'use strict';

var multiSelectServiceModule = angular.module('multiSelectService',[]);

multiSelectServiceModule.factory('multiSelect',['$http',
	function($http){
		var loadSelectData = function(){
			return $http({method:'get',url:'./data/select.json'});
		};
		return {
			selectData : function(){
				return loadSelectData();
			}
		};
	}
]);
