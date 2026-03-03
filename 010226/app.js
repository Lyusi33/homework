//1
// function isEven(n) {
//     if (n < 0) return false;
//     return n % 2 == 0 ? true : false
// }

// console.log(isEven(0));

//2
// function sumUpTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumUpTo(10));

//3
// function minInArray(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// console.log(minInArray([3, 1, 5]));

//4
// function countDigits(n) {
//     let countDig = 0;
//     if (n === 0) return 1;
//     if (n < 0) n *= -1;
//     while (n > 0) {
//         countDig++;
//         n = Math.floor(n / 10);
//     }
//     return countDig;
// }

// console.log(countDigits(-98));

//5
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3]));

//6
// function average(arr) {
//     let sum = 0;
//     let avg = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count++;
//         sum += arr[i];
//         avg = Math.floor(sum / count);
//     }
//     return avg;
// }

// console.log(average([2, 4, 6]));

//7
// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(countChar("abc", "d"));

//8
// function removeFirstChar(str) {
//     let firstChar = "";
//     for (let i = 1; i < str.length; i++) {
//         firstChar += str[i];
//     }
//     return firstChar;
// }

// console.log(removeFirstChar("hello"));

//9
// function power(base, exp) {
// // let res = Math.pow(base, exp);
// //or
// let res = base ** exp;
// return res;
// }

// console.log(power(2, 3));

//10
// function contains(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(contains([], 1));

//11
// function repeatString(str, n) {
//     let newStr = "";
//     for (let i = 0; i < n; i++) {
//         newStr += str;
//     }
//     return newStr;
// }
// console.log(repeatString("x", 0));

//12
// function firstAndLast(arr) {
//     if (arr.length === 0) return [];
//     return [arr[0], arr[arr.length - 1]];
//     //or
//     // let newArr = [];
//     // return newArr.concat(arr[0], arr[arr.length - 1]);
// }

// console.log(firstAndLast([1, 2, 3]))