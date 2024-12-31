// string are text
// string method(length,)

// // new keyword used type string to object
// let x=new String("jhon")
// console.log(typeof(x));

let Func1=function () {
    console.log('orignal function');
    
}
let Func2=Func1

Func2=function (){
    console.log(`modified function`);
    
}
Func1()


