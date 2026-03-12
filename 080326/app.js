//1
// function forEach(array, callback) {
//     for (let i = 0; i < array.length; ++i) {
//         callback(array[i], i, array);
//     }
// }

// let array = [1, 2, 3];
// forEach(array, function (value, index) {
//     console.log(value, index)
// });

//2
// function map(array, callback) {
//     let newArr = [];
//     for (let i = 0; i < array.length; ++i) {
//         newArr.push(callback(array[i], i, array));
//     }
//     return newArr;
// }

// let numbers = [1, 2, 3];
// let doubled = map(numbers, function (numbers) { return numbers * 2; });
// console.log(doubled);

//3
// function filter(array, callback) {
//     let newArr = [];
//     for (let i = 0; i < array.length; ++i) {
//         newArr.push(callback(array[i], i, array));
//     }
//     return newArr;
// }

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function (arr) {
//     return arr > 2;
// });
// console.log(result);

//4
// function some(array, callback) {
//     for (let i = 0; i < array.length; ++i) {
//         callback(array[i], i, array);
//     }
// };

// let arr = [1, 3, 7, 9];
// let even = arr.some(function (arr) {
//     return arr % 2 == 0;
// });
// console.log(even);

//5
// function every(array, callback) {
//     for (let i = 0; i < array.length; ++i) {
//         callback(array[i], i, array);
//     }
// };

// let arr = [5, 9, 7, 3];
// let age = arr.every(function (arr) {
//     return arr > 20;
// });
// console.log(age);

//6
// function indexOf(array, callback) {
//     for (let i = 0; i < array.length; ++i) {
//         callback(array[i], i, array);
//     }
// };

// let numbers = [2, 6, 9, 5, 7, 1, 0];
// let res = numbers.indexOf(3);
// console.log(res);
