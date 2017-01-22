/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/


function ticTacToe(board){
	
	for (var i = 0; i < board.length; i++) {
		var row = board[i];
		if(rowCheck(row)){
			return rowCheck(row);
		}
	}

	for (i = 0; i < board.length; i++) {
		if(colCheck(board, i)){
			return colCheck(board, i);
		}
	}

	if(diagCheck(board)){
		return diagCheck(board);
	}

	for (i = 0; i < board.length; i++) {
		if(board[i].indexOf(0)>-1){
			return -1;
		}
	}
	return 'draw';
};

function rowCheck(row){
	var xCount = 0;
	var oCount = 0;
	each(row, function(e){
		if(e === 1){
			xCount++;
		}
		if(e === 2){
			oCount++;
		}
	})
	if(xCount === 3){
		return 1;
	}
	if(oCount === 3){
		return 2;
	}
	
}

function colCheck(board, j){
	var xCount = 0;
	var oCount = 0;
	for (var i = 0; i < board.length; i++) {
		if(board[i][j] === 1){
			xCount++;
		}
		if(board[i][j] === 2){
			oCount++;
		}
	}
	if(xCount === 3){
		return 1;
	}
	if(oCount === 3){
		return 2;
	}
}

function diagCheck(board){
	var xCount = 0;
	var oCount = 0;
	var j = 0;
	for (var i = 0; i < board.length; i++) {
		if(board[i][j] === 1){
			xCount++;
		}
		if(board[i][j++] === 2){
			oCount++;
		}
	}
	if(xCount === 3){
		return 1;
	}
	if(oCount === 3){
		return 2;
	}

	xCount = 0;
	oCount = 0;
	j = board.length - 1;
	for (var i = board.length - 1; i >= 0; i--) {
		if(board[i][j] === 1){
			xCount++;
		}
		if(board[i][j--] === 2){
			oCount++;
		}
	}
	if(xCount === 3){
		return 1;
	}
	if(oCount === 3){
		return 2;
	}
}