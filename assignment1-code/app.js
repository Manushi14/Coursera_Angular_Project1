console.log("hello");

(function(){
"use strict";

angular.module("LcApp",[])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope){
    $scope.list='';
    $scope.msg ='';
    $scope.fontStyle = {};
    $scope.boxStyle = {};

    $scope.itemCount = function(){
        console.log("check Items");
        console.log($scope.list);
        if($scope.list !== ""){
            var div = $scope.list.split(",");
            var count = 0;
            for(var i=0; i<div.length; i++){
                if(div[i].trim() !== "")
                    count++;
                
            }
            if(count > 0){
                if(count <=3){
                    $scope.msg = "Enjoy!";
                }
                else if(count > 3){
                    $scope.msg = "Too much!";
                }
                $scope.fontStyle = {
                    "color":"green"
                }
                $scope.boxStyle = {
                    "border-color":"green"
                }
            }
            else{
                addItems();
            }
        }
        else{
            addItems();
        }
    }

    var addItems = function(){
        $scope.msg = "Please enter data first";
        $scope.fontStyle = {"color":"red"};
        $scope.boxStyle = {"border-color":"red"};
    }


}

})();