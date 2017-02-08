/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var res = 0;

var robotPaths = function(myBoard) {
 	
/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths
var robotPaths = function (n) {
  // the amount of paths
  var paths = 0;
  // make the board
  var board = makeBoard(n);
  // recursive fn to find all possible robot paths
  var findPaths = function (i, j) {
    // if a path has been found add it to the paths count
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }
    // if it has run out of bounds, return
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return;
    }
    // if the spot has already been visited then return
    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      // toggle a piece on the board
      board.togglePiece(i, j);
      // go right
      findPaths(i, j + 1);
      // go down
      findPaths(i + 1, j);
      // go left
      findPaths(i, j - 1);
      // go up
      findPaths(i - 1, j);
      // toggle the piece back
      board.togglePiece(i, j);
    }
  };

  findPaths(0, 0);
  // return the number of paths
  return paths;
};      

}









