// Task(5). 1-OPTION
// function createStack() {
//     const items = []
//
//     return Object.freeze({
//         push(item) {
//             items.push(item);
//         },
//         pop() {
//             return items.pop();
//         },
//         log: function () {
//             console.log(items)
//         }
//     });
// }

// const stack = createStack();
// stack.push(10);
// stack.push(12);
// stack.push(33);
// stack.push(55);
// stack.push(88);
// console.log(stack.pop()); // => 5
// stack.log()
// console.log(stack.items); // => [10]
// stack.items = [10, 100, 1000];
// Վերևում գրվածը ճիշտ աշխատում է, սակայն ունի 1 խնդիր՝ յուրաքանչյուրը կարող է փոփոխել “items”-ը գրելով stack.items = …
// Դա խնդիր է, քանի որ մեր նպատակն է այնպես անել, որ “items”-ը հնարավոր լինի փոփոխել միայն “push” և “pop” մեթոդների միջիցով։ Այլ կերպ ասած՝ “push” և “pop” մեթոդները պետք է լինեն public, իսկ մնացած ամեն ինչ՝ private:
//     Փոփոխեք վերևում գրված կոդն այնպես (օգտագործելով closure), որպեսզի createStack ֆունկցիայից դուրս հնարավոր չլինի “items”-ը փոխել ուղղակիորեն:

// Այս տարբերակում Object.freeze() մեթոդի միջոցով սառեցնում եմ object-ը, և դարձնում եմ անհասանելի դրսից կառավարելու ներսի գործողությունները:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task(5). 2-OPTION
// function createStack() {
//     const items = [];
//
//     return {
//         push(item) {
//             items.push(item);
//         },
//         pop() {
//             return items.pop();
//         },
//         log() {
//             console.log(items);
//         }
//     };
// }

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// console.log(stack.pop()); // => 5
// stack.log();
// console.log(stack.items); // => [10]
// stack.items = [10, 100, 1000];


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/********************************************************************************************************************************************/

// Գրեք ֆունկցիա, որը ունի 2 արգումենտ՝
// function sum(num1, num2) {
//     if (num2 !== undefined) {
//         return num1 + num2
//     }
//     return function (num3) {
//        return num1 + num3
//     }
// }

// Եթե sum ֆունկցիան կանչվում է 2 արգումենտով, ապա այն պետք է վերադարձնի իրեն փոխանցված 2 թվերի գումարը։
// Եթե sum ֆունկցիան կանչվում է 1 արգումենտով՝ sum(1), ապա այն պետք է վերադարձնի մեկ այլ ֆունկցիա, որը կանչվելու դեպքում պետք է հաշվի sum-ին և իրեն փոխանցված թվերի գումարը՝

// console.log(sum(4, 5)) // => 9
// sum(3, 3); // => 6
// const double = sum(2);
// console.log(double(5));// => 7
// console.log(double(11)); // => 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }
//
//     let message = `Count is ${count}`;
//     function log() {
//         console.log(message);
//     }
//
//     return [increment, log];
// }
//
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();
// Կտպի Count is 0, որովհետև createIncrement() կանչելուց    let message = `Count is ${count}` 0 է, և մեր message-ն ոչ մի տեղ չենք փոխում, այդ իսկ պատճառով
// log(); ինչքանել կանչենք 0 լինելու։

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





























