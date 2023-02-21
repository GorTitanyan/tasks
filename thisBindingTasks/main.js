
// default binding
// const obj = {
//     method1: function () {
//         return this
//     },
//     method2: () => {
//         return this
//     }
// };
//
// const obj2 = {
//     name: "Gor",
//     age: 17,
// };
//
// console.log(obj.method2())



// Implicit binding
// const obj = {
//     method1: function () {
//         return this.name
//     },
//     method2: () => {
//         return this
//     }
// };
//
// const obj2 = {
//     name: "Gor",
//     age: 17,
// };
//
// console.log(obj.method1.call(obj2))



// Explicit binding
// const obj = {
//     method1: function () {
//         return this.name
//     },
//     method2: () => {
//         return this
//     }
// };
//
// const obj2 = {
//     name: "Gor",
//     age: 17,
// };
//
// console.log(obj.method2())



// new binding
// const obj = {
//     method1: function (name) {
//        return this.name = name
//     },
//     method2: () => {
//         return this
//     }
// };
//
// const obj2 = {
//     name: "Gor",
//     age: 17,
// };
//
// console.log(new obj.method1(obj2.name))