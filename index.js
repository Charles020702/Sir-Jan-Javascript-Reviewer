/*let num1 = "Charles";
var num2 = true;
const num3 = 3.14;
let x = "2.54";
let y = 2.54;
let z = "s";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log("Hello World");
console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

/*let x = prompt("Enter your Name:");
console.log(x);*/

/*let a = 10;
let b = 20;
let result = 0;

result = a + b
console.log(result);*/

/*let a = 10;
let b = 20;

console.log(a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);*/

/*let a = 4;

let b = 8;

console.log(a < b && a != b);
console.log(a < b && a == b);
console.log(a < b && !(a == b));
console.log(a < b || a != b);*/

/*let a = 10;
let b = 20;
let c = 0;

console.log(c += a * b);*/

/*let x = 17/2*3+2;
let y = 2+17/2*3;
let b = 19 % 4 + 15 / 2 * 3;
let a = (15 + 6) - 10 * 4;
let z = 17 / 2 % 2 *3**3;
 console.log(z);*/

/*var Fname = "Charles Valdez"; 
var age = 21;

console.log("My name is " , Fname, "and I'm", age,"Years Old.");*/

/*let stars = "********************************"

console.log(stars);
console.log("* Programming Assignment 1     *");
console.log("* Computer Progamming 2        *");
console.log("* Author: Duffy Ducky          *");
console.log("* Due Date: Thursday, Jan. 23  *");
console.log(stars);*/



 document.getElementById("btnsubmit").onclick =  function calculate(){
    let name = document.getElementById("txtname").value;
    let gross = document.getElementById("txtgross").value;
    
    document.getElementById("txtnamed").value = name;
    document.getElementById("txtgrossed").value = gross.toLocaleString(undefined, 2);

    let stateTax = 0.035 * gross;
    let socialSecurity = 0.0575 * gross;
    let pagibig = 0.0275 * gross;
    let philhealth = 200.0;
    let retirementPlan = 0.05 * gross;
    let netpay = gross - stateTax - socialSecurity - pagibig - philhealth - retirementPlan;

    document.getElementById("txtst").value = stateTax.toLocaleString(undefined, 2);
    document.getElementById("txtssc").value = socialSecurity.toLocaleString(undefined, 2);
    document.getElementById("txtpic").value = pagibig.toLocaleString(undefined, 2);
    document.getElementById("txtphc").value = philhealth.toLocaleString(undefined, 2);
    document.getElementById("txtrp").value = retirementPlan.toLocaleString(undefined, 2);
    document.getElementById("txtnp").value = netpay.toLocaleString(undefined, 2);

}