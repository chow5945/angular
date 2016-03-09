'use strict';

var multiSelectDirectiveModule = angular.module('multiSelectDirective',[]);

multiSelectDirectiveModule.directive('multiSelect',
	function(multiSelect){
			return {
			restrict : 'A',
			replace : true,
			templateUrl : './tpl/select.html',
			//scope : {},
			controller : function($scope,$element){
				multiSelect.selectData().then(
					function(resp){
						$scope.cells = resp.data;
					}
				);
			},
			link : function(scope,element,attrs){
				element.multiSelect();
				scope.openTradeModal=function(){$("#mod-columned-selector").modal();};
				scope.viewResult=function(){element.find('option:selected').map(function(){ return $(this).val(); }).get();};
			}
		};
	}
);
