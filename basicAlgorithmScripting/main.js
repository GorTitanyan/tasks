//****************************** Return Largest Numbers in Arrays ******************************************************
// function largestOfFour(arr) {
//     const newArr = []
//
//     for (let i = 0; i < arr.length; i++) {
//         let res = arr[i][0];
//         for (let j = 0; j < arr[i].length; j++) {
//
//             if (arr[i][j] > res ) {
//                 res = arr[i][j]
//             }
//         }
//         newArr.push(res)
//     }
//     return newArr;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [1000, 1001, 857, 1], [32, 35, 37, 39]]));
// console.log(largestOfFour([[1000, 1001, 857, 1], [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39]]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//****************************************** Confirm the Ending ********************************************************

// function confirmEnding(str, target) {
//     const strRevers = str.split("").reverse();
//     const targetRevers = target.split("").reverse();
//
//     for (let i = 0; i < targetRevers.length; i++) {
//         if (strRevers[i] !== targetRevers[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(confirmEnding("Bastian", "tag"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************************************* Repeat a String Repeat a String ****************************************

// function repeatStringNumTimes(str, num) {
//     if (num < 1) {
//         return "";
//     }
//     let newStr = "";
//
//     for (let i = 0; i < num; i++) {
//         newStr += str;
//     }
//     return newStr;
// }
//
// console.log(repeatStringNumTimes("abc", 3));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************ Truncate a String ***************************************************

// function truncateString(str, num) {
//     if (num >= str.length) {
//         return str;
//     }
//     return str.slice(0, num) + "...";
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************************************* Finders Keepers ********************************************************

// function findElement(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr[i];
//         }
//     }
// }
//
// console.log(findElement([1, 5, 3, 7], num => num % 2 === 0));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************************************* Boo who ****************************************************************

// function booWho(bool) {
//         return typeof bool === "boolean";
// }

// console.log(booWho(false));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//******************************************** Title Case a Sentence ***************************************************

// function titleCase(str) {
//     const lowerStr = str.toLowerCase().split(" ");
//     let upperStr = "";
//
//     for (let i = 0; i < lowerStr.length; i++) {
//        upperStr += lowerStr[i][0].toUpperCase() + lowerStr[i].slice(1) + " ";
//     }
//     return upperStr;
// }
//
// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//***************************************** Slice and Splice ***********************************************************

// function frankenSplice(arr1, arr2, n) {
//     arr2.splice(n, 0, ...arr1);
//
//     return arr2;
// }
//
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// console.log(frankenSplice([1, 2, 3, 4], [], 0));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************************************** Falsy Bouncer *********************************************************

// function bouncer(arr) {
//     let newArr = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!!arr[i]) {
//             newArr.push(arr[i])
//         }
//     }
//
//     return newArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer(["a", "b", "c"]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));
// console.log(bouncer([null, NaN, 1, 2, undefined]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************* Where do I Belong **************************************************

// function getIndexToIns(arr, num) {
//     let index = 0;
//
//     arr.sort((a, b) => {
//         return a - b;
//     })
//     for (let i = 0; i < arr.length; i++) {
//         if (num > arr[i]) {
//             index = i;
//         }
//     }
//     return index + 1;
// }

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([3, 10, 5], 3));
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([2, 20, 10], 19));
// console.log(getIndexToIns([2, 5, 10], 15));
// console.log(getIndexToIns([], 1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************ Mutations ***********************************************************

// function mutation(arr) {
//     let indexOne = arr[0].toLowerCase().split("");
//     let indexTwo = arr[1].toLowerCase().split("");
//
//     for (let i = 0; i < indexTwo.length; i++) {
//         let charIsExist = false;
//         for (let j = 0; j < indexOne.length; j++) {
//             if (indexTwo[i] === indexOne[j]) {
//                 charIsExist = true;
//             }
//         }
//         if (!charIsExist) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// console.log(mutation(["Mary", "Army"]));
// console.log(mutation(["Mary", "Aarmy"]));
// console.log(mutation(["ate", "date"]));
// console.log(mutation(["voodoo", "no"]));
// console.log(mutation(["hello", "neo"]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************ Chunky Monkey *******************************************************

// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//
//     for (let i = 0; i < arr.length; i += size) {
//         newArr.push(arr.slice(i, i + size));
//     }
//     return newArr;
// }
//
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**********************************************************************************************************************

