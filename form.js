(function () {
    'use strict';

    //Angular Controller Definition Reference1 and Dependency Should be Injected in Array Notation
    /*angular.module("m1cp.core").controller("FormController1",["$scope", function ($scope) {
    }]);

    //Angular Controller Definition Reference2 and Dependency Should be Injected Using $inject
    angular.module("m1cp.core").controller("FormController2", FormController2);
    FormController2.$inject = ['formService'];
    function FormController2(formService) {
        var vm = this;
        vm.footerlinks = formService.getFooters();
        vm.getfooters = getfooters;
        vm.setfooters = setfooters;

        function getfooters() {

        }

        function setfooters() {

        }
    }*/
	m1app.controller('formController', function ($scope, $timeout, $window,$filter) {
		  $scope.flagCheck = false;
		  $scope.count=0;
			$scope.update=function(){

			if( $scope.count > 0){
			$scope.flagCheck = false;
			}
			else{
					$scope.flagCheck = true;								
				}


				//if($scope.flagCheck){
				//	$scope.flagCheck = false;				
				//}else{
				//	$scope.flagCheck = true;								
				//}
			};
		  $scope.change=function (e , v){

				  if(e.target.checked){
					 $scope.flagCheck = false;
					  $scope.count = $scope.count+1;
				   }
			   else{
			     $scope.count = $scope.count - 1;
			   if($scope.count < 1){
					 $scope.flagCheck = true;
					 }
					
				   }  
		};
	});
})();
