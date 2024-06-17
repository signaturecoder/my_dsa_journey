/**
 * Write a function called sameFrequency. Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.
 * 
 * Time: O(N)
 */

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    // const number1 = [...String(num1)], number2 = [...String(num2)];

    // you should use toString() to convert number into string
    const number1 = num1.toString(), number2 = num2.toString();

    if(number1.length !== number2.length) return false;
    
    let lookup1 = {}, lookup2 = {};
    for(let i = 0; i < number1.length; i++) {
        const currentEle = number1[i];
        lookup1[currentEle] = (lookup1[currentEle] || 0 ) + 1;
    } 

    for(let i = 0; i < number2.length; i++) {
        const currentEle = number2[i];
        lookup2[currentEle] = (lookup2[currentEle] || 0 ) + 1;
    } 

    for(let key in lookup1) {
        if(!(key in lookup2))
            return false;
        if(lookup2[key] !== lookup1[key])
            return false;
    }
    return true;

  }
  

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14) )// false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false