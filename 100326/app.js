//1
// const firstPerson = {
//     firstName: "Alice",
//     age: 20,
//     eyeColor: "blue"
// };

// const nextPerson = {
//     firstName: "Ann",
//     lastName: "Smith"
// };

// const mergedPerson = Object.assign({}, firstPerson, nextPerson);
// console.log(mergedPerson);

//2
// const student = {
//     firstName: "Ann",
//     lastName: "Smith",
//     age: 20
// }

// Object.freeze(student);
// student.age = 21;
// student.firstName = "abc";
// console.log(student);

//3
// const user = {
//     // name: "Alice"
//     age: "90"
// }

// let isAdmin = user.name ? true : false;
// if (isAdmin) {
//     user.age = "20";
// }

// console.log(user);

//4
// let names = ["name", "lastName", "age"];
// let user = {};

// user[names[0]] = "Alice";
// user[names[1]] = "Smith";
// user[names[2]] = "20";
// console.log(user);

//5
// const numbers = {
//     firstNum: 1,
//     nextNum: 2,
//     lastNum: 3
// };

// for (const key of Object.keys(numbers)) {
//     console.log(`${key}: ${numbers[key]}`);
// };

//6
// const person = {
//     firstName: "Alice",
//     age: 40
// }

// let text = Object.entries(person);
// // console.log(text);
// // const newObj = Object.fromEntries(Object.entries(person));
// const filteredObj = text.filter(([key, value]) => typeof value === "number");
// const newObj = Object.fromEntries(filteredObj);
// console.log(newObj);

//7
// function isEqual(firstObj, nextObj) {
//     return JSON.stringify(firstObj) === JSON.stringify(nextObj);
// }

// const firstObj = { firstName: "Alice", age: 20 };
// const nextObj = { firstName: "Alice" };


// console.log(isEqual(firstObj, nextObj));
