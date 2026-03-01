//1
// function charCount(text) {
//     let length = text.length;
//     console.log(length);
// }

// let text = "hello world";
// charCount(text);

//2
// function uppercase(txt) {
//     let upp = txt.toUpperCase();
//     console.log(upp);
// }

// let uppTxt = "hello world";
// uppercase(uppTxt)

//3
// function sum(firstNum, nextNum) {
//     let result = firstNum + nextNum;
//     console.log(result);
// }

// let firstNum = 21;
// let nextNum = 3;
// sum(firstNum, nextNum);

//4
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }
//     console.log(reversed);
// }

// let str = "hello";
// reverseString(str);

//5
// let nextStr = "Learning JavaScript";
// let sub = "Java";
// let found = false;

// for (let i = 0; i <= nextStr.length - sub.length; i++) {
//     let outcome = true;
//     for (let j = 0; j < sub.length; j++) {
//         if (nextStr[i + j] !== sub[j]) {
//             outcome = false;
//             break;
//         }
//     }
//     if (outcome) {
//         found = true;
//         break;
//     }
// }

// console.log(found);

//6
// let numList = [3, 6, 9, 12];
// let target = 9;
// for (let i = 0; i < numList.length; i++) {
//     if (numList[i] == target) {
//         console.log(i);
//     }
// }

//7
// let expenses = [50, 75, 100];
// let sumOfArrayElem = 0;
// for (let i = 0; i < expenses.length; i++) {
//     sumOfArrayElem += expenses[i]
// }
// console.log(sumOfArrayElem);

//8
// function containSubstring(str, sub){
//     for(let i = 0; i <= str.length - sub.length; i++){
//         let res = true
//         for(let j = 0; j < sub.length; j++){
//             if(str[i+j] !== sub[j]){
//                 res = false;
//                 break;
//             }
//         }
//         if(res){
//             return true;
//         }
//     }
//     return false;
// }

// let firstRes = containSubstring("Learning JavaScript", "Java");
// let nextRes = containSubstring("Learning JavaScript", "Python");
// console.log(firstRes);
// console.log(nextRes);

//9
// function sumOfNumArr(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum;
// }

// let numArr = [3, 5, 7, 9];
// let result = sumOfNumArr(numArr);
// console.log(result);

//10
// function evenOrOdd(numbers) {
//     if (numbers % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));

//11
// function getType(value) {
//     if (value === null) {
//         return "null";
//     } if (Array.isArray(value)) {
//         return "array";
//     }
//     return typeof value;
// }

// console.log(getType(null));
// console.log(getType([1, 4, 7]));
// console.log(getType({ a: "name" }));
// console.log(getType(6));

//12
// function isFalsy(val){
//     if(val == "" || val == 0 || val == false || val == null || val == undefined) {
//         return true;
//     }
//     return false;
// }

// console.log(isFalsy(""));
// console.log(isFalsy(0));
// console.log(isFalsy(false));
// console.log(isFalsy(null));
// console.log(isFalsy(undefined));
// console.log(isFalsy("abc"));

//13
// function compare(firstVal, nextVal) {
//     return {
//         loose: firstVal == nextVal,
//         strict: firstVal === nextVal
//     }
// }

// let firstVal = 3;
// let nextVal = "3";
// console.log(compare(firstVal, nextVal));

//14
// function checkNum(value) {
//     return (typeof value === "number" && !isNaN(value) && isFinite(value) && Number.isSafeInteger(value))
// }

// console.log(checkNum(5));
// console.log(checkNum("5"));
// console.log(checkNum(NaN));

//15
// function convertValue(value) {
//     let num = Number(value);
//     if (num != num) {
//         return null;
//     }
//     return num;
// }

// console.log(convertValue("5"));
// console.log(convertValue("abc"));

//16
// function toBoolean(value){
//     return Boolean(value);
// }

// console.log(toBoolean("abs"));
// console.log(toBoolean(null));

//17
// function isSimpleObject(value) {
//     return (
//         typeof value === "object" && value !== null && !Array.isArray(value)
//     )
// }

// console.log(isSimpleObject({a: "name"}));
// console.log(isSimpleObject([]));
// console.log(isSimpleObject(null));

//18
// function isPrimitiveType(value) {
//     return (
//         typeof value === "string" ||
//         typeof value === "number" ||
//         typeof value === "boolean" ||
//         typeof value === "null" ||
//         typeof value === "undefined" ||
//         typeof value === "symbol" ||
//         typeof value === "bigint"
//     );
// }

// console.log(isPrimitiveType({ a: "name" }));
// console.log(isPrimitiveType([]));
// console.log(isPrimitiveType("name"));
// console.log(isPrimitiveType(4));
// console.log(isPrimitiveType(true));

//19
// function sumTwoNum(firstNum, nextNum) {
//     if (typeof firstNum === "number" && typeof nextNum === "number") {
//         return firstNum + nextNum;
//     }
//     return "Invalid input";
// }

// console.log(sumTwoNum(3, 3));
// console.log(sumTwoNum(1 + "1"));