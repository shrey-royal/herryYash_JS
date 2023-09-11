/*
Data Types:
> Primitive Data Types
1. Number -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
2. String -> "Hello World"
3. Boolean -> true, false

> Non-Primitive Data Types
4. Undefined -> undefined
5. Null -> null
6. Symbol -> Symbol()

> Complex Data Types
7. Array -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
8. Object -> {key: value}

Types of variables in Javascript:

1. var -> it is a global variable, it can be accessed anywhere in the program
2. let -> it is a local variable, it can be accessed only in the block it is defined
3. const -> it is a local variable, it can be accessed only in the block it is defined, it cannot be changed


Example of hoisting is given below:

console.log(a); // undefined
// var a = 10;

*/

// console.log(a); // undefined (hoisting)
// var a = 10;
// console.log(a);

/*
Operators in JavaScript:

1. Arithmetic Operators -> +, -, *, /, %, ++, --
2. Assignment Operators -> =, +=, -=, *=, /=, %=
3. Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators -> &&, ||, !
5. Bitwise Operators -> &, |, ~, ^, <<, >>
6. Ternary Operators -> ?:
7. Type Operators -> typeof, instanceof
8. String Operators -> +

*/


// difference between === and ==
// console.log(2 == "2"); // true
// console.log(2 === "2"); // false
// > == checks only the value
// > === checks the value as well as the data type

// type of operator
// console.log(typeof 23); // number

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a instanceof Array); // true

// console.log(typeof [1, 2, 4, 4]);

// + operator (string operator)

// console.log(2 + 2);
// console.log("2" + "2");
// console.log(2 + "2");
// console.log(+"2" + 2);

/*
Control Flow in JavaScript:

1. if-else
2. switch-case
3. for loop
4. while loop
5. do-while loop
6. break
7. continue

*/

// if-else
// let a = prompt("Enter a number: ");
// console.log(a);

// if(a == 10) {
//     console.log("a is 10");
// } else {
//     console.log("a is not 10");
// }

//grade calculator

// let marks = prompt("Enter your marks: ");

// if(marks >= 90) {
//     // console.log("A");
//     alert("Grade: \nA");
// } else if(marks >= 80) {
//     // console.log("B");
//     alert("Grade: \nB");
// } else if(marks >= 70) {
//     // console.log("C");
//     alert("Grade: \nC");
// } else if(marks >= 60) {
//     // console.log("D");
//     alert("Grade: \nD");
// } else if(marks >= 50) {
//     // console.log("E");
//     alert("Grade: \nE");
// } else {
//     // console.log("F");
//     confirm("Grade: \nF");
// }

// let result = new Boolean(confirm("Do you want to continue?"));
// console.log(result);

// popup -> alert, prompt, confirm

// console.log(prompt("Enter a number: "));

// switch(+prompt("Enter a number: ")) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     default:
//         console.log("Default");
// }

// for loop
// console.log("for loop");
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // while loop
// console.log("while loop");
// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// // do-while loop
// console.log("do-while loop");
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while(j < 10);