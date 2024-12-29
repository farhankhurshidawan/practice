// Objects are containers for Properties and Methods.
// Properties key(name) and values("farhan")
// methods are function stored as properties
// *****************basics ******************************
// // adding new property and del property
// objectName.addNewProperty="Farhan"
// delete objectName.addNewProperty

// // nested objest
// const objectName={
//     fahmi:{
//         son:1,
//         daughter:2
//     },
//     sami:{
//         son:5,
//         daughter:2
//     }
// }
// console.log(objectName.sami.son);
// console.log(objectName["fahmi"]["son"]);

// // function used in obj

// const objectName={
//     firstName:"farhan",
//     lastName:"khurshid",
//     fullName:function myFullName(){
//         return (`${this.firstName} ${this.lastName}`)
//     }
// }
// console.log(objectName.fullName());



//  ************Accessing Object Properties******************
// 1) objectName.property
// 2) objectName["property"]
// 3) objectName[expression]




// ********************How to Define a JavaScript Object ****************************
// // 1) Using an Object Literal
// // An object literal is a list of name:value pairs inside curly braces {}.
// const method1={
//     Brother2:"Burhan",
//     MyName:"Farhan"
// }
// const method2={}
// method2.Brother3="reehan"
// method2.Brother4="hamdan"
// console.log(`${method1.MyName} and ${method2.Brother3}`);

// // 2) Using the new Keyword
// const newKeyword=new Object()
// newKeyword.name="Farhan"
// newKeyword.age="Burhan"
// console.log(newKeyword);

// 3) Using an Object Constructor

