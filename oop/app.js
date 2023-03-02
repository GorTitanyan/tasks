// ==========FIRST TASK==========
// class Person {}
// class Employee extends Person {}
// class Developer extends Employee {}
// const tom = new Developer();

// console.log(Object.getPrototypeOf(tom) === Developer.prototype)// true
// true է տպում քանի որ tom-ը ստեղծվախ է Developer-ից ապա նրա prototype-ը Developer․prototype-ն է

// console.log(Object.getPrototypeOf(tom) === Employee.prototype) //  false
// false է տպում քանի որ Employee.prototype-ը  tom-ին ստեղծած prototype-ը չի

// console.log(Developer.isPrototypeOf(tom)) // false
// false է տպում քանի որ Developer-ը   tom-ի  prototype-ը չի, այլ Developer․prototype-ն է նրա prototype-ը

// console.log(Developer.prototype.isPrototypeOf(tom)) // true
// true է տպում քանի որ  Developer-ը tom-ի prototype-ն է


// console.log(Employee.prototype.isPrototypeOf(tom)) // true
// true է տպում քանի որ  Employee-ը tom-ի prototype-ի prototype-ն է այսինքն կարող է prototypal շղթայով վեր բարձրանալ

// console.log(Person.prototype.isPrototypeOf(tom) )// true
// true է տպում քանի որ  Person-ը tom-ի prototypal շղթայում կա և նույն ձև tom-ը տեսնում է Person-ին

// console.log(Object.prototype.isPrototypeOf(tom)) // true
// նույ ձև ինչ վերևում քանի որ Object.prototype-ը Employee-ի prototype-ն է
// ==========SECOND TASK==========
const a = () => { };
function B() { }

// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞
console.log(typeof a)
console.log(typeof B)
// քանի որ երկունսն Էլ function են ապա նրանց type-ը function է
console.log(Object.getPrototypeOf(a))// B
console.log(Object.getPrototypeOf(B)) // B
// քանի որ երկունսն Էլ function են , նրանց prototype-ը տալիս է ուղղակի նրանց մարմինը
console.log(a.prototype);
console.log(B.prototype)
// B.prototype- դեպքում տպում է նրա կոնստրուկտորը քանի որ այն կոնստրուկտոր function է
// ==========FOURTH TASK==========
// Թարգմանեք հետևյալ կոդը ES5-ի (օգտագործեք function-ներ class-ի փոխարեն):
// class Person {
//     constructor(name) {
//       this.name = name;
//     }

//     sayHello() {
//       console.log(Hello from ${this.name});
//     }
//    }

// function Person(name){
//     this.name = name

//     Object.defineProperty(Person.prototype, 'method', {
//         value: () => {
//             console.log(this.name)
//         }
//       });

// }

// const gor = new Person("Gor")

// gor.method()

// ==========FIFTH TASK==========
// const gor = Object.create(null)
// console.log(gor.proto_);

// ==========SIXTH TASK==========
// Ներքևում գրված կոդն աշխատում է առանց խնդիրների, սակայն այն կարելի է ավելի լավացնել (օպտիմիզացնել): Գտե՛ք “խնդիրը” և ուղղե՛ք այն։
// function Hopar(name) {
//   this.name = name;
//   this.speak = function () {
//     console.log('Speaking:', this.name);
//   }
// }
// Hopar.prototype.spea2 =  function () {
//     console.log('Speaking:', this.name);
//   }
// const a = new Hopar('a');
// const b = new Hopar('b');
// console.log(a);
// a.speak()
// b.speak()

// Ստորև բոլոր խնդիրները գրեք և՛ class-ներով, և՛ Function Constructor-ներով

// ==========SEVENTH TASK==========
// Ստեղծեք Airplane class / կոնստրուկտոր ֆունկցիա, որը ստանում է name արգումենտ։

// Բոլոր airplane–ները (instance-ները) պետք է ունենան սեփական “isFlying” անունով property․ որի արժեքը նախնական “false” է
// Բոլոր airplane-ները պետք է ունենան “takeOff()” և “land()” մեթոդներ

// Երբ ինքնաթիռը օդ է բարձրանում (takeOff), “isFlying”-ը պետք է դառնա true
// Երբ ինքնաթիռը վայրէջք է կատարում (land), “isFlying”-ը պետք է դառնա false

// class Airplane{
//     constructor(name){
//         this.name = name;
//         this.isFlying = false;
//     }

//     takeOf(){
//         this.isFlying = true
//     }

//     land(){
//         this.isFlying =false
//     }
// }

// function Airplane(name){

//         this.name = name;
//         this.isFlying = false;


//         Object.defineProperty(Airplane.prototype, 'takeOf', {
//             value: () => {
//                         this.isFlying = true
//                     }
//                   });

//         Object.defineProperty(Airplane.prototype, 'takeOf', {
//                     value: () => {
//                         this.isFlying = true
//                     }
//                   });

// }

// const boing = new Airplane("boing")
// boing.takeOf()
// console.log(boing);

// ==========EIGHTH TASK==========
// Ստեղծեք Person class / կոնստրուկտոր ֆունկցիա, որը ստանում է name և age արգումենտներ։
// Բոլոր person-ները պետք է ունենան դատարկ զանգված (empty array)` “stomach”
// Ավելացրեք “eat” մեթոդ՝ eat(“uteliq”).

// ուտել (eat) մեթոդը պետք է “uteliq”-ը ավելացնի “stomach”-ում
// ամենաշատը կարելի է ուտել 10 ուտելիք (stomach.length)`
// Ավելացրեք “clear” մեթոդ՝ clear().

// clear-ը պետք է դատարկի stomach-ի պարունակությունը

// class Person{`
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//          this.stomach = []
//     }

//     eat(food){
//         if (this.stomach.length<10){
//             this.stomach.push(food)
//         }

//     }

//     clear(){
//         this.stomach = []
//     }
// }

// const gor = new Person("Gor",17)
// gor.eat("shaurma")

// console.log(gor);
// gor.clear()
// console.log(gor);
// ==========NINTH TASK==========

// Եթե այս կետում գրենք՝

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.toString = function () {
//   console.log(`My name is ${this.name}, I'm ${this.age} years old`);
// }
// const person1 = new Person('Gor', 14);
// person1.toString()
// Ի՞նչ կտեսնենք console-ում։ Ինչու՞։
// Գրե՛ք կոդ, որից հետո console.log(person1.toString()); արտահայտությունը console-ում կտպի տվյալ person-ի անունը և տարիքը, օր․՝ “Person1, 14”:

// ==========TENTH TASK==========
// 10 (8.2):
// Ստեղծեք Baby class / կոնստրուկտոր ֆունկցիա, որը ժառանգում է Person class-ը։
// Baby-ի կոնստրուկտորը, Person-ի հետ համեմատած, պետք է ստանա 1 ավել արգումենտ՝ “favoriteToy”։
// Person-ի մեթոդներից բացի, Baby-ն պետք է ունենա “play()” մեթոդ, որը կանչվելուց պետք է վերադարձնի string` “Playing with x”, որտեղ x-ը favoriteToy-ն է տվյալ instance-ի համար։
// ES6
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Baby extends Person {
//   constructor(name, age, favouriteToy) {
//     super(name, age)
//     this.favouriteToy = favouriteToy
//   }
//   play() {
//     return `Playing with ${this.favouriteToy}`
//   }
// }


// const tom = new Baby("Tom", 2, "car")
// console.log(tom);
// console.log(tom.play());
//  ES5
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   Object.defineProperty(Person.prototype, "myAge", {
//     value: () => {
//       console.log(`I'm ${this.age} years old`);
//     }
//   })
// }



// function Baby(name, age, favoriteToy) {
//   Person.call(this, name, age)
//   this.favoriteToy = favoriteToy;
// }
// Baby.prototype = Object.create(Person.prototype)
// const tom = new Baby("Tom", 2, "car")
// tom.myAge()
// var a = {
//   index: 1
// };

// // later
// console.log(a); // ??

// // even later
// a.index++;
// console.log(a); // ??


// function* foo() {
//   var x = yield 2;
//   z++;
//   var y = yield (x * z);

//   console.log(x, y, z);
// }

// var z = 1;

// var it1 = foo();
// var it2 = foo();
// var it3 = foo()
// var val1 = it1.next().value;			// 2 <-- yield 2
// var val2 = it2.next().value;
// var val3 = it3.next().value;
// console.log(val1, val2, val3);			// 2 <-- yield 2

// val1 = it1.next(val2 * 10).value;
// console.log(val1);	// 40  <-- x:20,  z:2
// // val2 = it2.next(val1 * 5).value;		// 600 <-- x:200, z:3

// // it1.next(val2 / 2);					// y:300
// // // 20 300 3
// // it2.next(val1 / 4);					// y:10
// 										// 200 10 3