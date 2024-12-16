// ********************************** forEach *********************************************


// const h1=document.querySelectorAll("h1")
// // show nodeList
// console.log(h1);
// h1.forEach(myFunc)

// function myFunc(item,index) {
//     console.log(`index :${index} value: innerText ${item.innerText}`);
//     const items=item.style.backgroundColor="red"
// }


// ************************** multiple but same name class access ********************************


// header=document.getElementsByClassName("header")
// // show htmlcollection
// console.log(header);

// // // error foreach not a function for each does not directly support in htmlCollection
// // header.forEach(myFunc)
// // function myFunc(item,index){
// //     item.style.backgroundColor="red"
// // }

// // htmlCollection convert in Array
// convertArray=Array.from(header)
// console.log(convertArray);
// convertArray.forEach(myFunc)

// function myFunc(item,index) {
//     item.style.color="blue"
// }


// ************************************  parentChild relation  ************************************ 

// const parent =document.querySelector("#text")
// // children
// console.log(parent.children);
// // first children
// console.log(parent.firstElementChild);
// // last element child
// console.log(parent.lastElementChild);
// // parent element access
// const child=document.querySelector(".header")
// console.log(child.parentElement);
// // nextsibling (node) mean sister brother
// console.log(child.nextSibling);
// // nextElementSibling (element) sister brother
// console.log(child.nextElementSibling);

// // child Nodes
// console.log(parent.childNodes);

// console.log(parent.children[1].innerText="child 123");

// for (let i = 0; i < parent.children.length; i++) {
//     const element = parent.children[i];
//     console.log(element);
//     element.style.backgroundColor="red"
// }

//********************* */ create new element in node *****************************

// const div=document.createElement("div")

// const addClass=div.className="adClass"
// const addId=div.id="addId"
// const addTitle=div.setAttribute("title","setTitle")
// const addText=document.createTextNode("add Text Node")
// div.appendChild(addText)
// document.body.appendChild(div)
// div.style.backgroundColor="gray"
// div.style.textAlign="center"
// console.log(addId);
// console.log(div);

function addOptimizeElement(language){
   
    
    // create div
    const div=document.createElement("div")
    // create textNode
    const textNode=document.createTextNode(language)
    // textNode add in div
    div.appendChild(textNode)
    document.body.appendChild(div)
    console.log(div);
}
addOptimizeElement("java")
addOptimizeElement("python")
const secondLang=document.querySelector("div:nth-child(2)")
const newDiv=document.createElement("div")
newDiv.textContent="change text"
secondLang.replaceWith(newDiv)
console.log(secondLang);









