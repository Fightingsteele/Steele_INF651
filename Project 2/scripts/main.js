let name = "William";
let age = 22;
let student = true;

console.log("Part 1");

console.log(name);
console.log(age);
console.log(student);

console.log("Part 2");

let value1 = 5;
let value2 = 10;

console.log(value1 + value2);
console.log(value1 - value2);
console.log(value1 * value2);
console.log(value1 / value2);

console.log("Part 3");

let string = "This is a sentance"
console.log(string.length);
console.log(string[0]);
console.log(string[string.length - 1]);

console.log("Part 4");

let negative = -4;

let square = Math.pow(negative, 2);
let absolute = Math.abs(negative);
let root = Math.sqrt(absolute);

console.log(square, "Squared");
console.log(absolute, "Absolute Value");
console.log(root, "Square Root");

console.log("Part 5");

let value3 = 10;
let value4 = 2;

if(value3 > value4){
    console.log("Value 3 is bigger");
} else if (value3 < value4) {
    console.log("Value 3 is smaller");
} else if (value3 === value4){
    console.log("Value 3 is equal to value 4");
}

console.log("Part 6");

let bool1 = true;
let bool2 = false;

console.log("AND", bool1 && bool2);
console.log("OR", bool1 || bool2);
console.log("NOT bool1", !bool1);
console.log("NOT bool2", !bool2);

console.log("Part 7");

let firstname = "William";
let lastname = "Steele";

let message = `Welcome ${firstname} ${lastname}.`
console.log(message);