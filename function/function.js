// return => function stop mean function execute

// const demo=document.querySelector("#demo")
// // function block of code
// function myFuncName(parameter1,parameter2){
//     // return : function will stop execution
//     return parameter1*parameter2
// }
// // myFuncName(argument)
// myFuncName(10,20)

// // ******** anonymous function(a function without a name) ***************
// //Functions stored in variables do not need function names.
// const addVaribale=function (p1,p2){
//     return p1*p2
// }
// demo.innerHTML=addVariable(2,4)

// // ***********function constructor *****************************
// function myfunc(name,age){
//     console.log(name,age);
    
// }
// const burhan=new myfunc("Burhan",20)
// const farhan=new myfunc("Farhan",22)


// // **********function Hoisting working**************************
// // JavaScript functions can be called before they are declared:
// document.querySelector("#demo").innerHTML=myFuncName(10,20)
// function myFuncName(parameter1,parameter2){
//     // console using hoisting
//     // return and browser not working hoisting
//     return parameter1*parameter2
     
// }

// // ******************self invoking function ****************************
// (function (){
//     let x="function call itself"
//     document.querySelector("#demo").innerHTML=x
    
// }())
 
// // **************** function are objects *****************
// function myfunc(name,age){
//  return arguments.length
// }
// document.querySelector("#demo").innerHTML=myfunc("farhan",22)
// // function does not execute ()
// document.querySelector("#demo").innerHTML=myfunc.toString()

