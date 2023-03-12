//********************************************* Sum All Numbers in a Range ******************************************
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////**************************************************** Diff Two Array ************************************************

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
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////************************************************* Seek and Destro *************************************************

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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*********************************************** Wherefore art thou ************************************************

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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////************************************************ Spinal Tap Case ***************************************************

// function spinalCase(str) {
//    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
// }
//
// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("The_Andy_Griffith_Show"));
// console.log(spinalCase("thisIsSpinalTap"));
// console.log(spinalCase("AllThe-small Things"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Pig Latin ***************************************************/

// function translatePigLatin(str) {
//     const vowel = ["a", "e", "i", "o", "u"];
//     const consonant = ["b", "c", "y", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
//     const addAy = "ay";
//     const addWay = "way";
//     let wordStr = str;
//     let consonantLetters = "";
//     let vowelLetters = "";

//     if (vowel.includes(...wordStr)) {
//         return wordStr + addWay;
//     };

//     for (let i = 0; i < consonant.length; i++) {
//         if (consonant.includes(wordStr[i])) {
//             consonantLetters += wordStr[i];
//         }
//         else if (vowel.includes(wordStr[i])) {
//             vowelLetters += wordStr.slice(consonantLetters.length) + consonantLetters + addAy;
//             return vowelLetters;
//         }
//         else {
//             wordStr += addAy;
//             return wordStr
//         };
//     };
// };
// console.log(translatePigLatin("consonant"));   // onsonantcay
// console.log(translatePigLatin("california"));  // aliforniacay
// console.log(translatePigLatin("paragraphs"));  // aragraphspay
// console.log(translatePigLatin("glove"));       //  oveglay
// console.log(translatePigLatin("algorithm"));   //  algorithmway
// console.log(translatePigLatin("eight"));       //  eightway
// console.log(translatePigLatin("schwartz"));    //  artzschway
// console.log(translatePigLatin("rhythm"));      //  rhythmay
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************************************** Search and Replace ************************************************/

// function myReplace(str, before, after) {
//     const textArr = str.split(" ");
//     const beforeStr = before;
//     let afterStr = after;
//     let changedStr = "";

//     if (beforeStr[0] === beforeStr[0].toLowerCase()) {
//         afterStr = afterStr[0].toLowerCase() + afterStr.slice(1);
//     }
//     else {
//         afterStr = afterStr[0].toUpperCase() + afterStr.slice(1);
//     };

//     for (let i = 0; i < textArr.length; i++) {
//         if (textArr[i] === beforeStr) {
//             textArr[i] = afterStr;
//             changedStr = textArr.join(" ");
//         }
//     };
//     return changedStr;
// };

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("Let us go to the store", "store", "mall"));
// console.log(myReplace("I think we should look up there", "up", "Down"));
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// console.log(myReplace("His name is Tom", "Tom", "john"));
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** DNA Pairing *************************************************/

// function pairElement(str) {
//     const resultArr = [];

//     for (let i = 0; i < str.length; i++) {
//         switch (str[i]) {
//             case "G":
//                 resultArr.push(["G", "C"]);
//                 break;
//             case "C":
//                 resultArr.push(["C", "G"]);
//                 break;
//             case "A":
//                 resultArr.push(["A", "T"]);
//                 break;
//             case "T":
//                 resultArr.push(["T", "A"]);
//         };
//     };
//     //     if (str[i] === "G") {
//     //         resultArr.push(["G", "C"]);
//     //         continue;
//     //     };
//     //     if (str[i] === "C") {
//     //         resultArr.push(["C", "G"]);
//     //         continue;
//     //     };
//     //     if (str[i] === "A") {
//     //         resultArr.push(["A", "T"]);
//     //         continue;
//     //     };
//     //     if (str[i] === "T") {
//     //         resultArr.push(["T", "A"]);
//     //     };
//     // };
//     return resultArr;
// };

// console.log(pairElement("GCG"));    // [["G","C"], ["C","G"], ["G","C"]]
// console.log(pairElement("ATCGA"));  // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement("TTGAG"));  // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement("CTCTA"));  // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Missing letters *********************************************/

// function fearNotLetter(str) {
//     const alphaBet = "abcdefghijklmnopqrstuvwxyz".split("");
//     const letterStr = str.split("");
//     const startIndex = alphaBet.indexOf(letterStr[0]);
//     let charMissing = "";

//     for (let i = startIndex; i < alphaBet.length; i++) {
//         if (!letterStr.includes(alphaBet[i])) {
//             charMissing = alphaBet[i];
//             return charMissing;
//         };
//     };
// };

// console.log(fearNotLetter("abce"));  // d
// console.log(fearNotLetter("abcdefghjklmno"));  // i
// console.log(fearNotLetter("stvwx"));  //  u
// console.log(fearNotLetter("bcdf"));   // e
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Sorted Union ************************************************/

// const a = [1, 3, 2, 5, 2, 1, 4, 2, 1];
// const uniqe = []
// const b = new Set(a)
// console.log(b)

// function uniteUnique() {
//     const [...resultArr] = [...arguments];
//     const newArr = resultArr.flat(1);
//     const arr = [];

//     for (let i = 0; i < newArr.length; i++) {
//         if (!arr.includes(newArr[i])) {
//             arr.push(newArr[i]);
//         };
//     };
//     return arr;
// };

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4] [1, 3, 2, 5, 4, ]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Tests *******************************************************/

// function convertHTML(str) {
//     const arr = str.split("");
//     let resultStr = "";

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] === "&") {
//             arr.splice(i, 1, "&amp;") // ["D", "o", l, c, e, " ", &amp;, " ", G, a , b, b, a, n ,a] Dolce &amp; Gabbana
//             resultStr = arr.join(""); // Dolce &amp; Gabbana
//             continue;
//         }
//         if (arr[i] === "<") {
//             arr.splice(i, 1, "&lt;")
//             resultStr = arr.join("");
//             continue;
//         }
//         if (arr[i] === ">") {
//             arr.splice(i, 1, "&gt;")
//             resultStr = arr.join("");
//             continue;
//         }
//         if (arr[i] === '"') {
//             arr.splice(i, 1, "&quot;");
//             resultStr = arr.join("");
//             continue;
//         }
//         if (arr[i] === "'") {
//             arr.splice(i, 1, "&apos;");
//             resultStr = arr.join("");
//             continue;
//         }
//         if (resultStr === "") {
//             resultStr = str;
//         }
//     };
//     return resultStr;
// };

// console.log(convertHTML("Dolce & Gabbana"));               // Dolce &amp; Gabbana
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));    // Hamburgers &lt; Pizza &lt; Tacos
// console.log(convertHTML("Sixty > twelve"));                // Sixty &gt; twelve
// console.log(convertHTML('Stuff in "quotation marks"'));    // Stuff in &quot;quotation marks&quot;
// console.log(convertHTML("Schindler's List"));              // Schindler&apos;s List
// console.log(convertHTML("< >"));                            // &lt;&gt;
// console.log(convertHTML("abc"));                           // abc
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************** Sum All Odd Fibonacci Numbers *******************************************/

// function sumFibs(num) {
//     const fibArr = [1, 1];
//     let resultNum = 0;

//     while ((fibArr[0] + fibArr[1]) <= num) {
//         fibArr.unshift((fibArr[0] + fibArr[1]));
//     };
//     for (let i = 0; i < fibArr.length; i++) {
//         if (fibArr[i] % 2 !== 0) {
//             resultNum += fibArr[i];
//         };
//     };
//     return resultNum;
// };

// console.log(sumFibs(4));  // 5
// console.log(sumFibs(10)); // 10
// console.log(sumFibs(1000)); // 1785
// console.log(sumFibs(4000000)); // 4613732
// console.log(sumFibs(75024)); // 60696
// console.log(sumFibs(75025)); // 135721


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Sum All Primes **********************************************/

// IN PROGRESS
// function sumPrimes(num) {
//     return num;
// }

// sumPrimes(10);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//******************************************************* Drop it **************************************************/

// function dropElements(arr, func) {

//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr.slice(i);
//         };
//     };
//     return [];
// };

// console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
// console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));
// console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//******************************************************* Steamroller **********************************************/

// function steamrollArray(arr) {
//     const newArr = [];

//     function getNumber(array) {
//         for (let j = 0; j < array.length; j++) {
//             const element = array[j]; //  [1, [2], [3, [[4]]]]

//             if (!Array.isArray(element)) {
//                 newArr.push(element);
//             } else {
//                 getNumber(element);
//             };
//         };
//         return;
//     };
//     getNumber(arr);
//     return newArr;
// };

// console.log(steamrollArray([1, [2], [3, [[4]]]]));  // [1, 2, 3, 4]
// console.log(steamrollArray([[["a"]], [["b"]]]));    // ["a", "b"]
// console.log(steamrollArray([1, [], [3, [[4]]]]));   // [1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[4]]]]));   // [1, {}, 3, 4]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************************************************** Everything Be True ******************************************/

// function truthCheck(collection, pre) {
//     for (let i = 0; i < collection.length; i++) {
//         const element = collection[i];

//         if (!!!element[pre]) {
//             return false;
//         };
//     };
//     return true;
// };

// console.log(truthCheck([
//     {
//         name: "Quincy",
//         role: "Founder",
//         isBot: false
//     },
//     {
//         name: "Naomi",
//         role: "",
//         isBot: false
//     },
//     {
//         name: "Camperbot",
//         role: "Bot",
//         isBot: true
//     }
// ], "isBot"));
// console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "name"));
// console.log(truthCheck([{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users"));
// console.log(truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "data"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************* Make a Person **************************************************/

// const Person = function (firstAndLast) {
//     const getStr = firstAndLast.split(" ");
//     let firstName = getStr.slice(0, 1).join("");
//     let lastName = getStr.slice(1).join("");

//     this.getFirstName = function () {
//         return firstName;
//     };
//     this.getLastName = function () {
//         return lastName;
//     };
//     this.getFullName = function () {
//         return firstName + " " + lastName;
//     };
//     this.setFirstName = function (setFrstName) {
//         firstName = setFrstName;
//     };
//     this.setLastName = function (setLstName) {
//         lastName = setLstName;
//     };
//     this.setFullName = function (newFirstAndLast) {
//         firstName = newFirstAndLast.split(" ").slice(0, 1).join("");
//         lastName = newFirstAndLast.split(" ").slice(1).join("");
//     };
// };

// const bob = new Person('Bob Ross');
// console.log(bob.getFullName());
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// bob.setFirstName("Haskell");
// console.log(bob.getFullName());
// bob.setLastName("Curry");
// bob.setFirstName("Bob")
// console.log(bob.getFullName());
// bob.setFullName("Haskell Curry");
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.firstName);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************* Arguments Optional *********************************************/
// function addTogether(a, b) {
//     if (typeof a !== "number") {
//         return undefined;
//     };
//     if (arguments.length > 1) {
//         if (typeof b !== "number") {
//             return undefined;
//         };
//         return a + b;
//     };
//     return function (c) {
//         if (typeof c !== "number") {
//             return undefined;
//         };
//         return a + c;
//     };
// };

// console.log(addTogether(2, 5));
// const func2 = addTogether(8);
// console.log(func2(5))
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
// console.log(addTogether(2, "3"));
// console.log(addTogether(2)([3]));
// console.log(addTogether(5, undefined));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************* Binary Agents **************************************************/

// function binaryAgent(str) {
//     const outputStr = str
//         .split(' ')
//         .map(bin => String.fromCharCode(parseInt(bin, 2)))
//         .join('');
//     return outputStr;
// };

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// EXAMPLE
// console.log(String.fromCharCode(65))
// console.log(parseInt("01000001", 2))