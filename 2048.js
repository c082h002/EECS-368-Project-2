
var canvas = document.getElementById("canvas");
var numebr = canvas.getContext("2d");
var score = document.getElementById("Score");
var ScoreCounte = 0;
var width = 119;
var board = [];
var fontSize = 50;
var GameOver = false;

InitBoard();
DrawBoard();
RefreshBoard();
RefreshBoard();

function initCell(x,y) {
  this.value = 0;
  this.x = y*width + (y+1)*5;
  this.y = x*width + (x+1)*5;
}

function DrawBoard() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      draw(board[i][j]);
    }
  }
}

function InitBoard () {
  for (var i = 0; i < 4; i++) {
    board[i] = [];
    for (var j = 0; j < 4; j++) {
      board[i][j] = new initCell(i,j);
    }
  }
}

function RefreshBoard() {
  var Cells = 0;
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      if(board[i][j].value == 0 ) {
        Cells++;
      }
    }
  }
  if(Cells == 0) {
    canvas.style.opacity = '0.7';
    alert("Game is over, your score is: "+ ScoreCounte);
    GameOver = true;
    return;
  }

  while(true) {
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    if(board[a][b].value == 0) {
     
      board[a][b].value = 2 * (Math.floor(Math.random() * 2) +1);
      DrawBoard();
      return;
    }
  }

}

document.onkeydown = function (event) {
  if(!GameOver)
  {
    if (event.keyCode === 37) {
      boardMoveLeft();
      
    }else if (event.keyCode === 38) {
      boardMoveUp();
      
    }else if (event.keyCode === 39) {
      boardMoveRight();
      
    }else if (event.keyCode === 40) {
      boardMoveDown();
      
    }
    RefreshBoard();
    score.innerHTML = "score:" + ScoreCounte;
  }
}



function boardMoveUp(){
  var a;
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (board[i][j].value != 0) {
        a = i;
        while (a-1 >= 0) {
          if (board[a-1][j].value == board[a][j].value) {
            board[a-1][j].value *= 2;
            board[a][j].value = 0;
            break;
          }else if (board[a-1][j].value == 0) {
            board[a-1][j].value = board[a][j].value;
            board[a][j].value = 0;
            a--;
          }
          else {
            break;
          }
        }
      }
    }
  }
}

function boardMoveDown(){
  var a;
  for (var i = 2; i >= 0; i--) {
    for (var j = 0; j < 4; j++) {
      if (board[i][j].value != 0) {
        a = i;
        while (a+1 < 4) {
          if (board[a+1][j].value == board[a][j].value) {
            board[a+1][j].value *= 2;
            board[a][j].value = 0;
            break;
          }else if (board[a+1][j].value == 0) {
            board[a+1][j].value = board[a][j].value;
            board[a][j].value = 0;
            a++;
          }
          else {
            break;
          }
        }
      }
    }
  }
}

function boardMoveRight(){
  var b;
  for(var i = 0; i < 4; i++)
  {
    for(var j = 2; j > -1; j--)
    {
      if(board[i][j].value != 0) {
        b = j;
        while (b + 1 < 4) {
          if (board[i][b + 1].value == 0)
          {
            board[i][b + 1].value = board[i][b].value;
            board[i][b].value = 0;
            b++;
          } else if (board[i][b].value == board[i][b + 1].value) {

            board[i][b + 1].value *= 2;
            ScoreCounte =  board[i][b + 1].value + ScoreCounte;
            board[i][b].value = 0;
            break;
          }
          else
          {
            break;
          }
        }
      }
    }
  }
}

function boardMoveLeft(){
  var cura;
  for(var i = 0; i < 4; i++)
  {
    for(var j = 1; j < 4; j++)
    {
      if(board[i][j].value !== 0 ) {
        cura = j;
        while (cura-1 >= 0) {
          if (board[i][cura-1].value == board[i][cura].value)
          {
            board[i][cura-1].value *= 2;
            board[i][cura].value = 0;
            ScoreCounte =  board[i][cura - 1].value + ScoreCounte;
            break;
          }
          else if (board[i][cura-1].value == 0)
          {
            board[i][cura-1].value = board[i][cura].value;
            board[i][cura].value = 0;
            cura--;
          }
          else
          {
            break;
          }
        }
      }
    }
  }
}




function rst(){
	window.location.reload();
}