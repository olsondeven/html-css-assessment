angular.module('app').directive('navBar',function(){
  return {
    restrict: 'EA',
    templateUrl: './navbar.html',
    controller: function($scope){
      $scope.hello = 'hello'
    }
  }
});//closing
