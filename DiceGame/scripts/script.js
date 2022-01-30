
var player1dice1out = $('#player1-dice1');
var player1dice2out = $('#player1-dice2');
var player2dice1out = $('#player2-dice1');
var player2dice2out = $('#player2-dice2');
var player1scoreout = $('#player1-score');
var player2scoreout = $('#player2-score');

var newGameBtn = $('#new-game-btn');
var rollDiceBtn = $('#roll-dice-btn');

var player1score = 0;
var player2score = 0;
var rollsplayed = 0;
var gamend = true;

var game = new Game();

newGameBtn.click(function(){
    game.init();
    gamend = false;
})

rollDiceBtn.click(function(){
    if(!gamend){
        if(game.checkWin()){
            gamend=true;
        }
        game.roll();
    }
})

function Game(){
    var player1score,player2score

    this.init = function(){
        player1dice1out.html("-");
        player1dice2out.html("-");
        player2dice1out.html("-");
        player2dice2out.html("-");
        player1scoreout.html("-");
        player2scoreout.html("-");

        player1score = 0;
        player2score = 0;
    };

    this.rolldie = function(){
        return Math.floor(Math.random()*6 +1);
    }

    this.roll = function(){
        var p1d1 = this.rolldie();
        var p1d2 = this.rolldie();
        var p2d1 = this.rolldie();
        var p2d2 = this.rolldie();

        var p1inc = 0;
        var p2inc = 0;

        if(p1d1!=1 && p1d2!=1){
            p1inc = p1d1+p1d2;
        }
        if(p2d1!=1 && p2d2!=1){
            p2inc = p2d1+p2d2;
        }
        player1score += p1inc;
        player2score += p2inc;

        player1dice1out.text(p1d1);
        player1dice2out.text(p1d2);
        player2dice1out.text(p2d1);
        player2dice2out.text(p2d2);
        player1scoreout.text(player1score);
        player2scoreout.text(player2score);
    }

    this.checkWin = function(){
        if(player1score>player2score && player1score>25){
            alert('PLAYER 1 WIN!!!');
            return true;
        }
        if(player2score>player1score && player2score>25){
            alert('PLAYER 2 WIN!!!');
            return true;
        }
        return false;
    }
};