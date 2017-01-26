/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var res = [];
	while(matrix.length !== 0){
		res = res.concat(matrix.shift(matrix[i]));

		for (var i = 0; i < matrix.length; i++) {
			res.push(matrix[i].pop());
		}
		var lastInd = matrix.length-1;
		for ( var i = 0; i < matrix.length; i++) {
			res.push(matrix[lastInd].pop());
		}

		for (var i = matrix.length - 1; i >= 0; i--) {
			res.push(matrix[i].pop());
		}
	}
	return res;
};

//comlexity O(n^2)