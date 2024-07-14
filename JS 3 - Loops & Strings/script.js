console.log("Loops & String")

// for(let i=1; i<=5; i++){
//     console.log("Farhan", i);
// }

// let count = 0;
// while(count < 5){
//     console.log("While", count);
//     count++;
// }

// let a = 0;
// do{
//     console.log("do while", a);
//     a++;
// }while(a < 5);



// for of loop used for arrays & strings

// let str = "Farhan Akhtar";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     if(i == " "){
//         continue;
//     }
//     size++;
// }
// console.log("The size of str is ", size);



// for in loop is used for objects

// let student = {
//     name : "Farhan Akhtar",
//     age : 22, 
//     aim : "Google"
// };

// for (let i in student){
//     console.log(i, " : ", student[i]);
// }


// --------------------------------------------------------------------------------------------------------------------

// STRING

let str1 = "Farhan";

let str2 = "Akhtar";

console.log(str1.length);

console.log(str1[0]);



//Template Literals

let specialString = `This is a template literals`;
console.log(typeof specialString);

console.log(`My name is ${str1} ${str2}.`);


// Escape characters



console.log("Farhan \nAkhtar");
let str = "Farhan \tAkhtar";
console.log(str);
console.log(str.length);
console.log("The length of escape characters is 1 depsite of havinng an extra back slash.")

console.log(str.toUpperCase());
console.log(str.toLowerCase());
let hihihi = "     Hihihihihihihihi        "
console.log(hihihi.trim()); // removes white spaces

console.log(str.slice(0, 5));
console.log(str1.concat(str2));
console.log(str.replace("r", "S")); // first r hi replace hoga

console.log(str.charAt(5)); // to find the character in a string at particular index.