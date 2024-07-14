let marks = [91, 95, 98, 93, 90];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["Spider-man", "Iron-man", "Super-man"];
// // console.log(heroes);

// console.log(typeof marks);  //object, array dont have any data type it is object in itself

// console.log("marks[2] :", marks[2]); // 98

// console.log("marks[100] :", marks[100]); // undefined

// marks[0] = 85;
// console.log(marks);     // [85, 95, 98, 93, 90]

// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// cities = ["Kolkata", "Bangaluru", "Delhi", "Chennai", "Mumbai"]

// // for of
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

/* For a given array with prices of 5 items -> [250, 645, 300, 900, 50] 
   All items have an offer of 10% OFF on them. Change the array to store 
   fun ak price after applying offer. */

// let price = [250, 645, 300, 900, 50];

// console.log("Before discount : ", price)

// for(let i=0; i<price.length; i++){
//     let dis = price[i]*(1-0.1);
//     price[i] = dis;
// }

// console.log("After discount : ", price);

// ------------------------------------------------------------------------------------------------------------------------
// Array Methods

// Push() : add to end
// Pop() : delete from end and return
// toString : converts array to String


// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
// console.log(foodItems);
// foodItems.push("Chips");
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log("The deleted item : ",deletedItem);
// console.log("After pop : ", foodItems);

// console.log(foodItems);     // ['Potato', 'Apple', 'Litchi', 'Tomato']
// console.log(foodItems.toString());      // Potato,Apple,Litchi,Tomato

// console.log(marks);     // [91, 95, 98, 93, 90]
// console.log(marks.toString());  // 91,95,98,93,90


// -----------------------------------------------------------------------

// Concatanation

let marvelHeroes = ["Thor", "Spider-Man", "Iron-Man"];
let dcHeroes = ["Super-Man", "Bat-Man"];
let indianHeroes = ["Krish"];

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);

// ----------------------------------------------------------------------

// unshift() : add to start

// shift() : delete from start and return

marvelHeroes.unshift("Ant-Man");
console.log(marvelHeroes);

diedHero = marvelHeroes.shift();
console.log("Died from front : ", diedHero);
console.log(marvelHeroes);

// -----------------------------------------------------------------------
// slice() : return a piece of the array.
// splice() : change original array (add, remove, replace).
//                            splice(startIndex, delCount, newEle1...)

console.log(marvelHeroes.slice(1, 3));
console.log(marvelHeroes.slice());

// console.log(marvelHeroes.splice(0, 1, "Ant-Man"));  // returns the deleted elements
// console.log(marvelHeroes)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10];
console.log("Before splice : ", arr);

// Deleting & inserting elements using splice()
arr.splice(2, 2, 103, 104);
console.log("After splice(2, 2, 103, 104) : ", arr);

// Add elements using splice();
arr.splice(2, 0, 111);
console.log("After splice(2, 0, 111) : ",arr);

// deleting elements
arr.splice(3, 1);
console.log("After deleting element at index 3 splice(3, 1) : ", arr);

console.log(arr.splice(4)); // act as slice() method

// -------------------------------------------------------------------------------

/* Quuestion : Create an array to store companies -> */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the fisrt  company from the array
// companies.shift();
// console.log(companies);

// Remove Uber & Add Ola in its place
// companies.splice(2, 1, "Ola");
// console.log(companies);

// Add Amazon at the end
companies.push("Amazon");
console.log(companies);