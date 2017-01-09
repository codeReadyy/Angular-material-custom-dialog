var app = angular.module('MyApp', ['ngMaterial']);
app.controller('MyCtrl', function($scope, $mdDialog) {
  $scope.showDialog = function() {
    $mdDialog.show({
      controller: function($scope, $mdDialog, data) {
        $scope.passedAsLocals = data;
        $scope.close = function(){
          $mdDialog.hide();
        }  
      },
      locals:{"data":"This value comes from outside dialog box using locals option"},
      templateUrl: 'myCustomDialog.html',
      targetEvent: event
    });
  };

});
