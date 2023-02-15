// ==========FIRST TASK=============
// function sumAll(arr) {
//   let a = 0;
//   let b = 0;
//   [a, b] = arr;
//   let c = a > b ? a : b;
//   let d = a > b ? b : a;
//   let sum = 0;
//   for (let i = d; i <= c; i++) {
//     sum += i
//   }

//   return sum;
// }

// sumAll([5, 10]);



// ============SECONDS TASK===========
// function diffArray(arr1, arr2) {
//   const newArr = [];
//   let length = arr1.length > arr2.length ? arr1.length : arr2.length;
//   for (let i = 0; i < length; i++) {
//     if (arr1[i] && !arr2.includes(arr1[i])) {
//       newArr.push(arr1[i])
//     }
//     if (arr2[i] && !arr1.includes(arr2[i])) {
//       newArr.push(arr2[i])
//     }
//   }
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);





// ============THIRD TASK================
// function destroyer(arr, ...arr2) {
//   let arr3 = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a < arr2.length; a++) {
//       if (arr[i] === arr2[a]) {
//         arr.splice(i, 1, " ")
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== " ") {
//       arr3.push(arr[i])
//     }

//   }
//   return arr3

// }
// destroyer([3, 5, 1, 2, 2], 2, 3, 5)







// ============FOURTH TASK===============
// function whatIsInAName(collection, source) {

//   let count = 0;
//   let length = Object.keys(source).length;

//   let arr = []
//   for (let i = 0; i < collection.length; i++) {
//     count = 0;
//     for (let key in collection[i]) {
//       if (source[key] && source[key] === collection[i][key]) {
//         count++
//       }


//     }
//     if (count == length) {
//       arr.push(collection[i])
//     }
//   }
//   return arr
// }

// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })




// =======FIFTH TASK==========
// function spinalCase(str) {
//   let arr = Array.from(str)


//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == arr[i].toUpperCase() && arr[i] != "-" && arr[i] != " " && arr[i] != "_" && i != 0 && arr[i - 1] != "-") {
//       arr[i] = `-${arr[i]}`
//     }
//     arr[i] = arr[i].toLowerCase()
//     if (arr[i] == " " || arr[i] == "_") {
//       arr[i] = "-"
//     }
//   }
//   str = arr.join("")
//   return str
// }

// spinalCase("AllThe-small Things")


