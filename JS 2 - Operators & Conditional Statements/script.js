console.log("JS");

// let a = 5, b = 2;

//Arithmetic Operator
// console.log("Arithmetic Operator");
// console.log("a : ", a, " & b : ", b);
// console.log("a + b : ", a+b);
// console.log("a - b : ", a-b);
// console.log("a * b : ", a*b);
// console.log("a / b : ", a/b);
// console.log("a % b : ", a%b);
// console.log("a ** b : ", a**b);

//Unary Operator
// console.log("Unary Operator");
// let x = 5;

// console.log("x : ", x);
// console.log("x++ : ", x++);
// console.log("x : ", x);
// console.log("++x : ", ++x);
// console.log("x : ", x);

// let y = 10;

// console.log("y : ", y);
// console.log("y-- : ", y--);
// console.log("y : ", y);
// console.log("--y : ", --y);
// console.log("y : ", y);


// Assignment Operator

// =
// += 
// -=
// *=
// %=
// **=


// Comaparision Operator

// Equal to ==
// Not Equal to !=
// Equal to & Type ===
// Not Equal & Type !==
// >
// >=
// <
// <=

// console.log("5 == 2 : ", 5==2);     //false
// console.log("'5' == '2' : ", '5'=='2'); //false
// console.log("'5' === '2' : ", '5'==='2');   // false
// console.log("5 != 2 : ", 5!=2);     // true
// console.log("5 !== 2 : ", 5!==2);   // true
// console.log("'5' !== '2' : ", '5'!=='2');   // true
// console.log("'5' !== '5' : ", '5'!=='5');   // false


// Logical Operator

// AND &&
// OR ||
// NOT !


// -------------------------------------------------------------------------------------------------------------
// Conditional Statements

// let mode = "dark-mode";
// let color;
// if(mode === "dark-mode"){
//     color = "black";
// }

// let age = 18;

// if(age > 18){
//     console.log("You cam drive");
// }else if(age == 18){
//     console.log("Apply for Driving License");
// }
// else{
//     console.log("You cannot drive the car.");
// }


// Ternary Operator

// condition ? true output : false output

// let age = 65;
// console.log(age > 18 ? "adult" : "child")

// -------------------------------------------------------------------------------------------------------------

// MDN web docs

//--------------------------------------------------------------------------------------------------------------

//Switch Statements

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// --------------------------------------------------------------------------------------------------------

// User Input
let num = prompt("Enter a number: ");
if (num % 5 === 0){
    console.log(true);
}else{
    console.log(false);
}