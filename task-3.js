

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let num1 = 81;
let sum = 0;

while (num1 <= 131) {
    sum = sum + num1;
    num1 += 2;
}

console.log("sum of odd numbers:", sum);



let num2 = 206;
let sum2 = 0;

while (num2 <= 311) {
    sum2 = sum2 + num2;
    num2 += 2;
}

console.log("sum of even numbers:", sum2);