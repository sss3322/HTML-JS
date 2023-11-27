let a=30;
let b=40;
let sum= a+b;
// document.querySelector("h2").innerHTML = `sum is ${sum}`;
let heading1= document.querySelector("h2");
heading1.innerHTML =`sum is ${sum}`;
let styleObject = {"color": 'green', "background-color" : 'yellow'};
Object.assign(heading1.style, styleObject);