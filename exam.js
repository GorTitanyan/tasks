// // 1 What will this code print?
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 = {
//   ...obj,
//   a: 0,
// };

// console.log(obj2.a, obj2.b);
//0,2

// // 2 Which statement prints "roar" to the console?
// function foo(){
//   var sound = "grunt";
//   var bear = { sound: "roar" };
//   console.log(this.sound);
// }
// foo()
// // function roar() {
// // }
// // roar();

// //grunt

// // // 3 What is the result of running this code?
// sum(10, 20);
// diff(10, 20);
// function sum(x, y) {
//   return x + y;
// }

// let diff = function (x, y) {
//   return x - y;
// };
// // 30
// // err


// // 4 What is the result in the console of running the code shown?
// var Storm = function () {};
// Storm.prototype.precip = 'rain';
// var WinterStorm = function () {};
// WinterStorm.prototype = new Storm();
// WinterStorm.prototype.precip = 'snow';
// var bob = new WinterStorm();
// console.log(bob.__proto__);
// //snow



// // 5 You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console.
// //  Which revised version of the code without changing 'var' would result in the value 1, 2, 3 and 4 being logged?

// for (var i = 1; i <= 4; i++) {
//   // (function () {
//   //   var j = i
//   //   setTimeout(function () {
//   //     console.log(j);
//   //   }, j * 1000);
//   // })()
// setTimeout(function(){
//   console.log(i);
// },0)




// }



// // 6 Which snippet could you add to this code to print "food" to the console?
// class Animal {
//   static belly = [];
//   eat() {
//     Animal.belly.push('food');
//   }
// }
// let a = new Animal();
// a.eat();
// console.log(Animal.belly); //Prints food


// // 7  The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// // The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(5)
//     }, ms)
//   })

// }

// delay(3000).then(() => alert('runs after 3 seconds'))


// 8 Two functions – one object

// let obj  = {}

// function A() { 
//   return obj
// }
// function B() { 
//   return obj
// }

// let b = new B();
// let a = new A();

// // console.log(a, b);
// alert(a == b); // true

// // Is it possible to create functions A and B so that new A() == new B()?
//==========================================
// // 9 There’s a ladder object that allows to go up and down:

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//   return ladder
//     },
//     down() {
//       this.step--;
//   return ladder
//     },
//     showStep: function() { // shows the current step


//       alert( this.step );
//       return ladder
//     }
//   };

// // // //Now, if we need to make several calls in sequence, can do it like this:
// // // ladder.up();
// // // ladder.up();
// // // ladder.down();
// // // ladder.showStep(); // 1
// // // ladder.down();
// // // ladder.showStep(); // 0

// // // Modify the code of up, down and showStep to make the calls chainable, like this:
// console.log(ladder.up().up().down().showStep().down().showStep())


// // 10  What does this return?
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
//two

// // 11 What logs to console the following code snippet:
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method() {
//     console.log(this.name);

//   }
// };
// object.method();

// // // 12 What logs to console the following code snippet:
// const object = {
//   message: 'Hello, World!',
//   logMessage: () => {
//     console.log(this); // What is logged?
//   }
// };
// setTimeout(object.logMessage, 1000);
// //und
// var name = "Gor"
// const obj = {
//   name: "Edo",
//   method1(){
//     console.log(this.name);
//   },
//   method2: ()=>{
//     console.log(this.name);
//   }
// }
// obj.method1()
// obj.method2()
// // 13 What is the equivalent of the following class in ES5?
// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   hello() {
// //     return "hello " + this.name;
// //   }
// // }


// function Person(name){
//   this.name = name
// }

// Person.prototype.hello= function(){
//   return "hello"+ this.name
// }



// // 14 What will be output of this code?

// const a = 1 || true || 1 && 4 || 7;

// console.log(a);
//false


// // 15 Can you explain what asynchronous programming is?

// 16 What’s the output?
// async function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//           yield Promise.resolve(i);
//     }
// }

// (async () => {
//     const gen = range(1, 3);
//     for await (const item of gen) {
//           console.log(item);
//     }
// })();
//1
//2
//3

// // 17 Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?
// let name
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();
// alert(user.ref); // What's the result?
//

// // 18 Write an Array.prototype.map  implemention

// Array.prototype.myMap = function (func) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(func(this[i], i, this))
//   }
//   return arr
// }
// let arr = [1, 2, 3]
// let arr2 = arr.myMap(function (el, i, arr) {

//   return arr
// })
// console.log(arr2);
// // 19 Symbol in JS

// // 20  How works js memory and garbage collector?


// const arr = [1, 2, 3]

// const arr2 = arr











// // Constraints: Reverse Pairs

// // 1 <= s.length <= 3 * 105
// // s consists of digits, '+', '-', '(', ')', and ' '.
// // s represents a valid expression.
// // '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// // '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// // There will be no two consecutive operators in the input.
// // Every number and running calculation will fit in a signed 32-bit integer.






























// Problem 1 

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
// the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21




// function reverse(x) {

//   let bool = true
//   if (x < 0) {
//     bool = false
//   }
//   x = Number(Array.from(Math.abs(x).toString()).reverse().join(""))
//   x = bool ? x : -x
//   if (x >= Math.pow(2, 31) - 1 || x <= Math.pow(-2, 31)) {
//     return 0
//   }
//   return x
// }
















// // Problem 3 Count Number of Distinct Integers After Reverse Operations

// // You are given an array nums consisting of positive integers.

// // You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

// // Return the number of distinct integers in the final array.



// // Example 1:

// // Input: nums = [1,13,10,12,31]
// // Output: 6
// // Explanation: After including the reverse of each number, the resulting array is [1,13,10,12,31,1,31,1,21,13].
// // The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
// // The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31).
// // Example 2:

// // Input: nums = [2,2,2]
// // Output: 1
// // Explanation: After including the reverse of each number, the resulting array is [2,2,2,2,2,2].
// // The number of distinct integers in this array is 1 (The number 2).


// // Constraints: Total Cost to Hire K Workers

// // 1 <= nums.length <= 105
// // 1 <= nums[i] <= 106




// var countDistinctIntegers = function (nums) {
//   let nums2 = []
//   for (let i = 0; i < nums.length; i++) {

//     nums2.push(Number(Array.from(nums[i].toString()).reverse().join("")))
//   }

//   let arr = [...nums, ...nums2]
//   return [...new Set(arr)].length
// };

// countDistinctIntegers([1, 13, 10, 12, 31])































// // Problem 4

// // You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

// // You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

// // You will run k sessions and hire exactly one worker in each session.
// // In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
// // For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
// // In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
// // If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
// // A worker can only be chosen once.
// // Return the total cost to hire exactly k workers.



// // Example 1:

// // Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
// // Output: 11
// // Explanation: We hire 3 workers in total. The total cost is initially 0.
// // - In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
// // - In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
// // - In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
// // The total hiring cost is 11.
// // Example 2:

// // Input: costs = [1,2,4,1], k = 3, candidates = 3
// // Output: 4
// // Explanation: We hire 3 workers in total. The total cost is initially 0.
// // - In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
// // - In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
// // - In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
// // The total hiring cost is 4.


// // Constraints:

// // 1 <= costs.length <= 105 
// // 1 <= costs[i] <= 105
// // 1 <= k, candidates <= costs.length












// var totalCost = function (costs, k, candidates) {
//   let sum = 0

//   for (let a = 0; a < k; a++) {
//     let arr = [];
//     let arr2 = [];
//     let arr3 = [];
//     for (let i = 0; i < costs.length; i++) {
//       if (i < candidates) {
//         arr.push(costs[i])
//       } else if (i > costs.length - 1 - candidates) {
//         arr3.push(costs[i])
//       }
//       else {
//         arr2.push(costs[i])
//       }



//     }
//     let a = 0
//     let x = Math.min(...arr)
//     let y = Math.min(...arr3)

//     if (x <= y) {
//       arr.splice(arr.indexOf(x), 1)
//       a = x
//     } else {
//       arr3.splice(arr3.indexOf(y), 1)
//       a = y
//     }


//     sum += a
//     costs = [...arr, ...arr2, ...arr3]
//   }

//   return sum


// };



















// // Problem 5
// // Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// // Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().



// // Example 1:

// // Input: s = "1 + 1"
// // Output: 2
// // Example 2:

// // Input: s = " 2-1 + 2 "
// // Output: 3
// // Example 3:

// // Input: s = "(1+(4+5+2)-3)+(6+8)"
// // Output: 23
// var calculate = function (s) {
//   let arr2 = []
//   let sum = 0
//   let arr = Array.from(s)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == " ") {
//       arr.splice(i, 1)
//     }
//     if (Number(arr[i])) {
//       arr[i] = Number(arr[i])
//     }
//     if (arr[i] == "(" || arr[i] == ")") {
//       arr2.push([arr[i], i])
//     }
//   }
//   console.log(arr2);
//   for (let i = 0; i < arr2.length - 1; i++) {
//     if (arr2[i + 1][0] !== arr2[i][0]) {
//       console.log(arr2[i + 1]);
//     }else(){

//     }
//   }

//   console.log(arr);



// let arr3 = []
// for (let i = 0; i < arr.length; i++) {
//   let x = arr[0]
//   if (arr[i] === "+") {

//     x = x + arr[i + 1]
//     sum = x
//     if (arr[i + 2]) {
//       arr3.push(arr[i + 2])
//     }

//     i = i + 2
//   } else if (arr[i] === "-") {

//     x = x + arr[i + 1]
//     if (arr[i + 2]) {
//       arr3.push(arr[i + 2])
//     }
//     i = i + 2
//   } else {

//   }
//   if (i == arr.length - 1 && typeof arr[i] === "number") {
//     arr3.push(arr[i])
//   }
// }
// arr = [...arr3]
// console.log(sum);






// };



// calculate("(1+(4+5+2)-3)+(6+8)")





























// // Problem 6
// // Given an integer array nums, return the number of reverse pairs in the array.

// // A reverse pair is a pair (i, j) where:

// // 0 <= i < j < nums.length and
// // nums[i] > 2 * nums[j].

// // Example 1:

// // Input: nums = [1,3,2,3,1]
// // Output: 2
// // Explanation: The reverse pairs are:
// // (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// // (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// // Example 2:

// // Input: nums = [2,4,3,5,1]
// // Output: 3
// // Explanation: The reverse pairs are:
// // (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// // (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// // (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1


// // Constraints:

// // 1 <= nums.length <= 5 * 104
// // -231 <= nums[i] <= 231 - 1




// var reversePairs = function (nums) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let a = 0; a < nums.length; a++) {
//       if (i < a && nums[i] > 2 * nums[a]) {
//         count++
//       }
//     }
//   }
//   return count
// };

// reversePairs([2, 4, 3, 5, 1])





































// // Problem 2 spiral matrix

// // Given an m x n matrix, return all elements of the matrix in spiral order.

// // Example 1:

// // Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// // Output: [1,2,3,6,9,8,7,4,5]
// // Example 2:

// // Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// // Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// // Constraints:

// // m == matrix.length
// // n == matrix[i].length
// // 1 <= m, n <= 10
// // -100 <= matrix[i][j] <= 100



// var spiralOrder = function (matrix) {
//   let arr = []


//   for (let i = 0; i < matrix.length; i++) {

//     for (let a = i; a < matrix[0].length - i; a++) {

//       if (arr.length < matrix[0].length * matrix.length) {
//         arr.push(matrix[i][a])
//       }



//     }

//     for (let a = i + 1; a < matrix.length - i - 1; a++) {
//       if (arr.length < matrix[0].length * matrix.length) {
//         arr.push(matrix[a][matrix[a].length - 1 - i])
//       }




//     }

//     for (let a = matrix[0].length - 1 - i; a >= i; a--) {
//       if (arr.length < matrix[0].length * matrix.length) {
//         arr.push(matrix[matrix.length - 1 - i][a])
//       }




//     }
//     for (let a = matrix.length - 2 - i; a >= i + 1; a--) {
//       if (arr.length < matrix[0].length * matrix.length) {
//         arr.push(matrix[a][i])
//       }




//     }




//   }
//   arr = arr.filter(el => el || el == 0)
//   return arr





// };



// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

//8
//5
//5













// =================================================================

var calculate = function (s) {

  if (s.length == 1) {
    return s
  }


  while (typeof s != "number") {

    let ind
    let arr3 = []

    let s2 = ""
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "+" || s[i] == "-" || s[i] == "(" || s[i] == ")") {
        s2 += ","
      }

      s2 += s[i]


      if (s[i] == "+" || s[i] == "-" || s[i] == "(" || s[i] == ")") {
        s2 += ","
      }
    }

    s = []
    s2 = s2.split(",")
    for (let i = 0; i < s2.length; i++) {
      if (s2[i].trim() !== "") {

        s.push(s2[i])
      }
    }
    bool = s.every(el => {
      return el != "(" && el != ")"
    })
    if (!bool) {
      for (let i = 0; i < s.length; i++) {

        if (s[i] == "(") {

          ind = i
        } else if (s[i] == ")" && ind || ind == 0 && s[i] == ")") {
          solving(s.slice(ind + 1, i), ind, i, s, arr3)
          ind = 0
        }

      }
      s = s.join("")
      for (let i = 0; i < arr3.length; i++) {
        s = s.replace(arr3[i][0], arr3[i][1])
      }
    } else {

      solving(s, 0, s.length - 1, s, arr3)
      s = arr3[0][1]
    }

  }


  return s

}



function solving(arr, a, b, s, arr2) {

  let another = []


  if (arr.length == 1) {
    arr2.push([s.slice(a, b + 1).join(""), Number(arr[0])])
  } else if (arr.length == 2) {

    arr2.push([s.slice(a, b + 1).join(""), Number(arr[0] + arr[1])])
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "-" && i == 0) {
        another.push(-arr[1])
        i++
      }
      else {
        if (arr[i] == "-" && arr[i + 1] == "-") {
          another.push("+")
          i++
        } else if (arr[i] == "+" && arr[i + 1] == "-") {
          another.push("-")
          i++
        } else {
          another.push(arr[i])
        }
      }


    }

    arr = [...another]

    let sum = 0
    let x = Number(arr[0])
    for (let i = 1; i < arr.length; i++) {

      if (arr[i] == "+" || arr[i] == "-" && arr[i + 1] == "-") {
        sum = x + Number(arr[i + 1])
        x = sum
        i++

      } else if (arr[i] == "-") {
        sum = x - Number(arr[i + 1])
        x = sum
        i++
      }

    }

    arr2.push([s.slice(a, b + 1).join(""), sum])
  }





}
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
//   37/44 time limit exceeded