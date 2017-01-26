/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target, start, end) {
	start = start || 0;
	end = end || array.length-1;
	var midInd  = Math.floor((start+end)/2);
	if(target > array[end] || target < array[start]){
		return "NOT FOUND!";
	}
	if(target === array[midInd]){
		return midInd;
	}
	else if(target > array[midInd]){
		return binarySearch(array,target,midInd+1,end);
	}
	else{
		return binarySearch(array,target,start,midInd);
	}
};

//complexity O(log(n))

