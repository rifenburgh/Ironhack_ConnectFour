console.log("app.js connected.");

//!! Wrap functions in document ready upon code completion !!
$("document").ready(function() {
});

var myGlobalConnectGame;
var globalVariable = "New Connect Four Game";

function ConnectFour(playerName1, playerName2) {
  this.player1 = playerName1;
  this.player2 = playerName2;
  this.currentPlayer = 1;
  this.winner = null;
  this.board = [
    [1, 2, null, null, null, null, null],
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

}

ConnectFour.prototype.renderBoard = function() {
  $('#board').empty();
  this.board.forEach(function(row, rowIndex) {
    row.forEach(function(slot, colIndex) {
      var playerNum;
      if (slot === 1) {
        //player1 checker
        playerNum = 'player-checker-1';
      } else if (slot === 2){
        playerNum = 'player-checker-2';
      } else {
        playerNum = 'player-checker-0';
      }
      var slotHtml = '<div class="square"><div class="slot ' + playerNum + '"></div></div>';
      $("#board").append(slotHtml);
    });
  });
};


var newGame = new ConnectFour("Bob", "Sam");
newGame.renderBoard();
