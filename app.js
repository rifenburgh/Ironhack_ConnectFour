console.log("app.js connected.");

$("document").ready(function() {

});

function ConnectFour(playerName1, playerName2) {
  this.player1 = playerName1;
  this.player2 = playerName2;
  this.currentPlayer;
  this.winner = null;
  this.board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ];
  if (Math.random() < 0.5) {
    this.currentPlayer = this.player1;
  } else {
    this.currentPlayer = this.player2;
  }
  console.log(this.currentPlayer);

};
ConnectFour.prototype.currentPlayer = function() {
};
var globalVariable = "New Connect Four Game";


var newGame = new ConnectFour("Bob", "Sam");
