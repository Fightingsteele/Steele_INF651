//Part 1
let age = 21;
let pName = "Will";
let student = true;

console.log(age, typeof age, "Age");
console.log(pName, typeof pName, "Name");
console.log(student, typeof student, "Student");
console.log("");
//Part 2
let num1 = 10;
let num2 = 5;

let numAdd = num1 + num2;
let numSub = num1 - num2;
let numMult = num1 * num2;
let numDiv = num1 / num2;
console.log(numAdd, "Add");
console.log(numSub, "Sub")
console.log(numMult, "Mult")
console.log(numDiv, "Div")
console.log("");
//Part 3
let sString = "This is a sentence";
let sLength = sString.length;
let sFirst = sString[0];
let sLast = sString[sString.length - 1];
console.log(sLength, "Length");
console.log(sFirst, "First");
console.log(sLast, "Last");
console.log("");

//Part 4
let numNeg = -4;
let negSqrt = Math.sqrt(numNeg);
let negSqred = Math.pow(numNeg, 2);
let negAbs = Math.abs(numNeg);

console.log(negSqrt, "Sqrt");
console.log(negSqred, "Sqred");
console.log(negAbs, "Abs");
console.log("")

//Part 5
let numHigher = 5;
let numLower = 4;

let boolGreater = numHigher > numLower;
let boolEqual = numHigher = numLower;
let boolLess = numHigher < numLower;

console.log(boolGreater, "Greater");
console.log(boolEqual, "Equal");
console.log(boolLess, "Lesser");
console.log("");

//Part 6
let bool1 = true;
let bool2 = false;

let boolAND = bool1 && bool2;
let boolOR = bool1 || bool2;
let boolNOT = !bool1;

console.log(boolAND, "And");
console.log(boolOR, "Or");
console.log(boolNOT, "Not");
console.log("")

//Part 7
let strFirst = "William";
let strLast = "Steele";

let strGreeting = `Greetings ${strFirst} ${strLast}!` ;
console.log(strGreeting);
