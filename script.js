var app = angular.module('TicTacToeApp', []);
app.controller('GameController', function($scope) {
    $scope.gameboard = [
        ['11','12','13'],
        ['21','22','23'],
        ['31','32','33']
    ];
    $scope.moveNumber = 1;

    $scope.declareWinner = '';

    $scope.gameOver = false;

    $scope.draw = false;

    $scope.playerMove = function(cell) {
        if(cell == 'o' || cell == 'x') {
            return;
        }
        else if ($scope.moveNumber % 2 != 0) {
            $scope.gameboard[parseInt(cell.substring(0, 1)) - 1][parseInt(cell.substring(1)) - 1] = 'x';
        }
        else {
            $scope.gameboard[parseInt(cell.substring(0, 1)) - 1][parseInt(cell.substring(1)) - 1] = 'o';
        }

        $scope.getWinner();
        $scope.getDraw();
        $scope.moveNumber++;
        $scope.$apply();
    };

    $scope.getWinner = function() {
        gameboard = $scope.gameboard;
        winner = '';
       
        if(gameboard[0][0] == gameboard[1][1] && gameboard[2][2] == gameboard[0][0]) {
            winner = gameboard[0][0];
        }
        
        else if(gameboard[0][2] == gameboard[1][1] && gameboard[2][0] == gameboard[0][2]) {
            winner = gameboard[0][2];
        }
        
        else if(gameboard[0][0] == gameboard[1][0] && gameboard[2][0] == gameboard[0][0]) {
            winner = gameboard[0][0];
        }
        
        else if(gameboard[0][1] == gameboard[1][1] && gameboard[2][1] == gameboard[0][1]) {
            winner = gameboard[0][1];
        }
       
        else if(gameboard[0][2] == gameboard[1][2] && gameboard[2][2] == gameboard[0][2]) {
            winner = gameboard[0][2];
        }
        
        else if(gameboard[0][0] == gameboard[0][1] && gameboard[0][2] == gameboard[0][0]) {
            winner = gameboard[0][0];
        }
         
        else if(gameboard[1][0] == gameboard[1][1] && gameboard[1][2] == gameboard[1][0]) {
            winner = gameboard[1][0];
        }
         
        else if(gameboard[2][0] == gameboard[2][1] && gameboard[2][2] == gameboard[2][0]) {
            winner = gameboard[2][0];
        }

        if (winner == 'o') {
            $scope.declareWinner = 'O won! Restart';
            $scope.gameOver = true;
        }
        else if(winner == 'x') {
            $scope.declareWinner = 'X won! Restart';
            $scope.gameOver = true;
        }
    }

    $scope.getDraw = function() {
        gameboard = $scope.gameboard;

        numberOfPotentialWins = 0;

        possibleWins = [
            [gameboard[0][0],gameboard[1][1],gameboard[2][2]],
            [gameboard[0][2],gameboard[1][1],gameboard[2][0]],
            [gameboard[0][0],gameboard[1][0],gameboard[2][0]],
            [gameboard[0][1],gameboard[1][1],gameboard[2][1]],
            [gameboard[0][2],gameboard[1][2],gameboard[2][2]],
            [gameboard[0][0],gameboard[0][1],gameboard[0][2]],
            [gameboard[1][0],gameboard[1][1],gameboard[1][2]],
            [gameboard[2][0],gameboard[2][1],gameboard[2][2]]
        ];

        for(i = 0; i < possibleWins.length; i++) {
            containsX = false;
            containsO = false;
            for(x = 0; x < possibleWins[i].length; x++) {
                if(possibleWins[i][x] == 'x') {
                    containsX = true;
                }
                else if(possibleWins[i][x] == 'o') {
                    containsO = true;
                }
            }
            if(containsO && !containsX) {
                numberOfPotentialWins++;
            }
            else if(containsX && !containsO) {
                numberOfPotentialWins++;
            }
            else if(!containsO && !containsX) {
                numberOfPotentialWins++;
            }
        }
        $scope.draw = (numberOfPotentialWins == 0);
    }

    $scope.reset = function() {
        $scope.gameboard = [
            ['11','12','13'],
            ['21','22','23'],
            ['31','32','33']
        ];

        $scope.moveNumber = 1;

        $scope.declareWinner = '';

        $scope.draw = false;

        $scope.gameOver = false;
    }
});