/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.*/
function loopAString(str){
  var x=0
  while(x<str.length){
    console.log(str.charAt(x))
    x++
  }
}

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S
  // done 
  
 

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d




// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here


function reverseStr(string){
 var n=string.length-1
  var x= ""
  var y=1
  while (n>=0){
    var x= x +string.charAt(n)+y

    n=n-1
    y++
    
  }
  return x 
}

