var app = angular.module("AngularInputsApp", []);

app.controller("AngularInputsCtrl", function ($scope){
  
   $scope.board = [["", "", ""],[ "", "", ""], ["", "", ""]];

   $scope.squareClick = function (row, col){
      $scope.board[row][col] = "i got clicked!!!";

   };
   $scope.turnNumber = 0;
   $scope.makeMove = function (row, col){
    $scope.board[row][col] = ($scope.turnNumber % 2) == 0 ? "x" : "o";
    $scope.turnNumber++;
   };

   $scope.game = {board: [01, 02, 03, 04, 05, 06, 07, 08, 09], p1: "x", p2: "o"};

   $scope.bits = [true, false, false, true, true, false, false, true];
  console.log($scope);

});