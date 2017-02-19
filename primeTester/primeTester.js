/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {
	for (var i = 2; i < n; i++) {
		if(n%i === 0){
			return false;
		}
	}
	return true;
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


function allPrimes(a,b){
	var res =[];
	for (var i = a; i <= b; i++) {
		if(primeTester(i)){
			res.push(i)
		}
	}
	return res;
}

