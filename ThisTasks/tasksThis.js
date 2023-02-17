//1. Ի՞նչ կարտածվի console-ում, ինչու՞ (1-15):
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };
//
// console.log(shape.diameter());
// console.log(shape.perimeter());
// console.log(shape.diameter()); -> կտպի 20, քանի որ Implicit binding է, shape.diameter() ֆունկցիայի ․ ձախ համարվում է
// տվյալ ֆունկցիայի this, ու դառնում է shape Object-ի this որի radius: 10 և return է անում this.radius, 10 * 2:
// diameter ֆունկցիան ունի իր սեփական this:
// console.log(shape.perimeter()); -> կտպի NaN, քանի որ arrow function-ը չունի իր սեփական this: քանի որ arrow function-ը
// գտնվում է Object-ի scope-ի ներսում, այլ ոչ function-ի scope-ում, այդ պատճառով դուրս է գալիս global scope, և վերցնում է
// Window, Window.radius դառնում է undefined, 6․28 * undefined տալիս է NaN:
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2.
// let a = 3;
// let b = new Number(3);
// let c = 3;
//
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(b === c); // false

// 1․console.log(a == b);true, որովհետև == ժամանակ ստուգվում է միայն արժեքը, 2․ console.log(a === b);false, որովհետև === ժամանակ ստուգվում է
// և արժեքը և տիպը, տվյալ դեպքում   let a = 3, 3ի տիպը թվային պրիմիտիվ է,        իսկ  let b = new Number(3) 3ը , new -ը ստեղծում օբյեկտ թիվ 3,
// հետևաբար տիպ number հավասար չէ տիպ object-ին։
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3.
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');
// console.log(lydia);
// console.log(sarah);
// console.log(lydia); կտպի firstName: "Lydia", lastName: "Hallie", քանի որ new binding-է, new ստեղծում է նոր object
// դրսից տրված արգումենտները դառնում են value, իսկ this.firstName, this.lastName key-ը։
// console.log(sarah); կտպի undefined, որովհետև երբ ֆունկցիան կանչում ես, ու ֆունկցիան ոչմի բան չի վերադարձնում, լինում է undefined:
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4.
// function checkAge(data) {
//     if (data === {age: 18}) {
//         console.log('You are an adult!');
//     } else if (data == {age: 18}) {
//         console.log('You are still an adult.');
//     } else {
//         console.log('Hmm.. You dont have an age I guess');
//     }
// }
//
// checkAge({age: 18});
// կտպի Hmm.. You dont have an age I guess, քանի որ console.log({} === {}) թե այս դեպքում, console.log({} == {}) թե այս,
// false, որովհետև ամեն նոր ստեղծված object, իրենց հասցեները hip-ում պահվում են տարբեր բլոկներում։
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//5․
// const a = {};
// const b = {key: 'b'};
// const c = {key: 'c'};
//
// a[b] = 123;
// a[c] = 456;
//
// console.log(a[b]);
// կտպի 456, քանի որ a - kay-ը object է, իսկ object-ի key-ը այս պարագայում "[object Object]" է, որը նույնն է ինչ const b = {key: 'b'} թե const c = {key: 'c'}
// key->"[object Object]" -ի value սկզբում 123, հետո փոխում դարձնում ենք 456։


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//6.
// class Counter {
//     constructor() {
//         this.count = 0;
//     }
//     increment() {
//         this.count++;
//     }
// }
//
// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();
//
// const counterTwo = counterOne;
// counterTwo.increment();
//
// console.log(counterOne.count);
// Կտպի 3, new Counter() ստեղծում է նոր class և վերագրում է counterOne-ին, counterOne.increment() կանչելուց Implicit binding է
// this.count++; ամեն կանչելուց ավելանում է, իսկ այս դեպքում const counterTwo = counterOne; վերագրվում է class-ը նոր փոփոխականի,
// որի դեպքում ունենում ենք 2 class, բայց նույն reference-ով, այդ իսկ պատճառով ել counterTwo.increment(); կանչելուց this.count++
// նորից ավելանում է։


//7.
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//         const message = 'Hello, Earth!';
//         return this.message;
//     }
// };
// console.log(object.getMessage());
// կտպի Hello, World!, քանի որ Implicit binding-է, console.log(object.getMessage()) վերցնում է object-ի this message: 'Hello, World!'


//8.
// function Pet(name) {
//     this.name = name;
//     this.getName = () => {
//        return this.name
//     };
// }
//
// const cat = new Pet('Fluffy');
// console.log(cat.getName());
// const { getName } = cat;
// console.log(getName())
// կտպի console.log(cat.getName()); Fluffy, console.log(getName()) Fluffy, new ստեղծում է նոր instance որն իր հերթին ունի constructor
// constructor ունի իր  this-ը, instance երբ ստեղծվել է արդեն cat փոփոխականում, console.log(cat.getName()); անելուց կանչում է this.getName որն
// Arrow function և return է անում this.name, քանի որ  Arrow function-ը չունի իր this-ը, վերցնում է մոտ function scope-ի this-ը, որն այս
// պարագայում this.name = name('Fluffy');
// const { getName } = cat; սա destructuring -է, որը նշանակում է cat object-ից վերցնում է getName function-ը և կանչում։ կանչելուց getName function
//  անում է վերևում նշված նույն Arrow function-ի գործողությունը։
//
//
//9.
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message); // What is logged?
//     }
// };
//
// setTimeout(object.logMessage, 1000);
// կտպի undefined, քանի որ   setTimeout(object.logMessage, 1000) ->>> object.logMessage չենք կանչում (), setTimeout 1վյրկ հետո երբ կանչում է
// object.logMessage իր ներսում, this.message փորձում է գտնել ․message ,երբ չի գտնում դուրս է գալիս global scope, և նույնպես չի գտնում, և տպում է
//undefined


//10.
// const object = {
//     who: 'World',
//     greet() {
//         return `Hello, ${this.who}!`
//     },
//     farewell: () => {
//         return `Goodbye, ${this.who}!`
//     }
// };
// console.log(object.greet());
// console.log(object.farewell());
//կտպի console.log(object.greet()); Hello World, որովհետև object.greet() Implicit binding-է վերցնում է object-ի this որը who: 'World'
//կտպի console.log(object.farewell());  Goodbye undefined, որովհետև farewell arrow function է, որը չունի սեփական this, քանի որ
// object scope-ի ներսում ենք, մոտ function-ի scope չի գտնում, դուրս է գալիս global scope, քանի որ չի կարողանում գտնել this.who
// global scope ում, որը նույն ինքը Window.who, այդ իսկ պատճառով տպում է undefined:


//11.
// var length = 4;
// function callback() {
//     console.log(this.length);
// }
//
// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };
//
// object.method(callback, 1, 2);
// կտպի 4, object.method(callback, 1, 2) կանչելուց տալիս ենք արումենտ, որն իր հերթին callback function
// declaration է, ունի իր սեփական this - ը, երբ արգումենտը ստանում ենք method(callback) իր ներսում միանգամից կանչում է callback()
// կանչելուց հետո console.log(this.length) իր function ի scope ում չի this.length , դուրս է գալիս global scope, որտեղ ունենք
// var length = 4; և վերցնում ու տպում է 4։

//12.
// const call = {
//     caller: "mom",
//     says: function() {
//         console.log(`Hey, ${this.caller} just called.`);
//     }
// };
//
// let newCall = call.says;
//
// newCall();
// կտպի Hey, undefined just called., քանի որ let newCall = call.says այս դեպքում վերագրում եմ newCall ին, իր this-ը դառնում է
// Window, և Window չունի caller արժեք։

//13.
// function logThis(){
//     console.log(this);
// }
//
// const myObj = {
//     logThis
// };
//
// myObj.logThis();
// կտպի myObj որպես this:


//14.
// function logThis(){
//     console.log(this);
// }
//
// const myObj = {
//     foo: function(){
//         logThis()
//     }
// };
//
// myObj.foo();
// կտպի Window որովհետև logThis function-ին bind արած չի this, կանչելու դեպքում իր this-ը Window-ն է։


//15.
// const logThis = () => {
//     console.log(this);
// }
//
// const myObj = {
//     foo: logThis
// };
//
// myObj.foo();
// կտպի Window, քանի որ arrow function-ը չունի իր սեփական this-ը։


//16.
// function logThis(){
//     console.log(this);
// }
//
// const someObj = new logThis();
// կտպի logThis{} քանի որ new ստեղծում է նոր instance և իր constructor-ը որն ունի իր this-ը, իսկ constructor-ի հենց this-ը իր իսկ instance է logThis{}