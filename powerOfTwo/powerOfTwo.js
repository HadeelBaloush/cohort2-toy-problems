/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

// var powerOfTwo = function(num){
// 	res = Math.pow(2,num);
// 	var sum = 0;

// 	while(res>0)
// 	{
// 		sum=sum+res%10;
// 		res=Math.floor(res/10);
// 	}
// 	return sum;
// }



var powerOfTwo = function(num){
	//res = Math.pow(2,num);
	var x = num*Math.log(2);

	var decimal = x % 10;

	var res = Math.pow(10,decimal);
	var int = parseInt(res);
	decimal = res%10;

	var sum1 = 0;
	var sum2 = 0;

	while(int>0)
	{
		sum1=sum1+int%10;
		int=Math.floor(int/10);
	}
	while(decimal>0)
	{
		sum2=sum2+res%10;
		res=Math.floor(res/10);
	}
	return sum1+sum2;
}


