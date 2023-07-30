// polyfill code in js

// let name ={
//     firstName:"Srinath",
//     lastName:"Govindalapudi"
// }

// let printName = function(state,country){
//     console.log(this.firstName +"," + this.lastName +"," + state+"," + country);
// }

// const printMyName = printName.bind(name, "Andhra","India"); 
// printMyName();

// Function.prototype.myBind = function(...args){
//     let obj = this
//     let params = args.splice(1);
//     return function(...args2){
//         obj.call(args[0],params,args2);
//     }
// }

// const printMyName2 = printName.myBind(name , "Andhra"); 
// printMyName2("India");

// let person = ["Srinath", "Govindalapudi"];

// // Using Array's forEach method
// function printName(person) {
//   person.forEach(value => {
//     console.log(value);
//   });
// }
// printName(person);

// // Custom myForEach method
// Array.prototype.myForEach = function () {
//   for (let i = 0; i < this.length; i++) {
//     console.log("myForEach", this[i]);
//   }
// };

// // Using the custom myForEach method
// function printName2(person) {
//   person.myForEach();
// }
// printName2(person);
