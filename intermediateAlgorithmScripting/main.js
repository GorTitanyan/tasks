//********************************************* Sum All Numbers in a Range *********************************************
// function sumAll(arr) {
//     arr.sort((a, b) => a - b);
//     const startIndex = arr[0];
//     const endIndex = arr[1];
//     let res = 0;
//
//     for (let i = startIndex; i <= endIndex; i++) {
//         res += i;
//     }
//     return res;
// }
//
// console.log(sumAll([1, 4]));
// console.log(sumAll([4, 1]));
// console.log(sumAll([5, 10]));
// console.log(sumAll([10, 5]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Diff Two Arrays *************************************************

// function diffArray(arr1, arr2) {
//     let newArr = [];
//
//     for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             newArr.push(arr2[i]);
//         }
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             newArr.push(arr1[i]);
//         }
//     }
//     return newArr;
// }
// let arr = [1, 2, 3, 5];
// let arr3 = [4];
// let a = arr.indexOf(arr3[0]);
// console.log(a)
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************* Seek and Destroy ***************************************************

// function destroyer() {
//     const [arr1, ...arr2] = [...arguments];
//     const arrResult = [];
//
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             arrResult.push(arr1[i]);
//         }
//     }
//     return arrResult;
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
// console.log(destroyer([2, 3, 2, 3], 2, 3));
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************ Wherefore art thou **************************************************

// function whatIsInAName(collection, source) {
//     return collection.filter(item => {
//         const sourceKeys = Object.keys(source);
//         const itemKeys = Object.keys(item);
//
//         for (let i = 0; i < sourceKeys.length; i++) {
//             const sourceKey = sourceKeys[i];
//             const fundIndexItemKeys = itemKeys.indexOf(sourceKey);
//             if (fundIndexItemKeys === -1) {
//                 return false;
//             }
//             if (source[sourceKey] !== item[sourceKey]) {
//                 return false;
//             }
//         }
//         return true;
//     })
// }
//
// console.log(whatIsInAName([
//     {first: "Romeo", last: "Montague"},
//     {first: "Mercutio", last: null},
//     {first: "Tybalt", last: "Capulet"}
// ], {last: "Capulet"}));
// console.log(whatIsInAName([{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}], {"apple": 1}));
// console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}], {
//     "apple": 1,
//     "bat": 2
// }));
// console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"apple": 1}, {"apple": 1, "bat": 2, "cookie": 2}], {
//     "apple": 1,
//     "cookie": 2
// }));
// console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"apple": 1}, {
//     "apple": 1,
//     "bat": 2,
//     "cookie": 2
// }, {"bat": 2}], {"apple": 1, "bat": 2}));
//
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************** Spinal Tap Case ***************************************************

// function spinalCase(str) {
//    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
// }
//
// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("The_Andy_Griffith_Show"));
// console.log(spinalCase("thisIsSpinalTap"));
// console.log(spinalCase("AllThe-small Things"));

