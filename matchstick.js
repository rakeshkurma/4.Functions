/* 
Take input from the user in the function parameter and return the output
using the return statement.

examples-
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
*/

function matchHouses(n)
{
    return 6+( (n-1) *5);  // Only first House Require 6 Match Sticks . All other need only 5 because it taking Support from previous home which already we counted.
}


const prompt=require("prompt-sync")();

let n=prompt("Enter Number Houses you want to make  ");
let matchsticks=matchHouses(n);
console.log(`To Create ${n} Houses You Require ${matchsticks} Matchsticks`);