/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */


// when given 13--  1, 2, 3, 5, 8, 13 --- with adding only even numbers -- 2, 8 --> 10
// if 13 is the highest value
// begin with 1, and 2
// add first two target numbers, the next number in sequence is equal to the sum
// target numbers become the second target number from the prior pair, and the sum 

// 34 -- 1, 2, 3, 5, 8, 13, 21, 34 --> 44


function _sumFibs( maxFibValue ) {
  var sum = 0;
  var firstNum = 1;
  var secondNum = 2;
  var sumInSequence = 0;

  while (secondNum <= maxFibValue){
    sumInSequence = firstNum + secondNum;

    firstNum = secondNum;
    secondNum = sumInSequence;

    if (firstNum % 2 === 0){
      sum += firstNum;
    }  
  }


  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;



  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};