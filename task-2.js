/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/


// odd number

let num1 = 61;

while (num1 <= 100) {
    if (num1 % 2 !== 0) {
        console.log("odd number:", num1);
    }
    num1++;
}


// even number

let num2 = 78;

while (num2 <= 98) {
    if (num2 % 2 === 0) {
        console.log("even number:", num2);
    }
    num2++;
}