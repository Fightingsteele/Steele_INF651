console.log("Part 1");
let count = 0
while(count <= 50){
    if(count % 2 == 0){
        console.log(count, "is even");
    }
    count++;
}

console.log("Part 2");
let attempt;
const code = "1234";
 do{
    attempt = prompt("Enter Pin:");
 } while (attempt !== code);
 console.log("Code entered");

 console.log("Part 3");
 let number = prompt("Enter a number: ");
 for(let i = 0; i <=10; i++){
    if(number*i%5 == 0){
        continue;
    }
    console.log(`${number} x ${i} = ${number * i}`);
 }

 console.log("Part 4");
 let number2 = prompt("Enter a number: ");
 if(number2 == 0){
    console.log("It is 0");
 }else if (number2 % 2 == 1){
    console.log("It is odd");
 }else{
    console.log("It is even");
 }

  console.log("Part 5");
  let month = prompt("Enter a number 1-12");
  switch (month){
    case "1":
        console.log("January");
        break;
    case "2":
        console.log("February");
        break;
    case "3":
        console.log("March");
        break;
    case "4":
        console.log("April");
        break;
    case "5":
        console.log("May");
        break;
    case "6":
        console.log("June");
        break;
    case "7":
        console.log("July");
        break;
    case "8":
        console.log("August");
        break;
    case "9":
        console.log("September");
        break;
    case "10":
        console.log("October");
        break;
    case "11":    
        console.log("November");
        break;
    case "12":
        console.log("December");
        break;
    default:
        console.log("Invalid Input");

  }