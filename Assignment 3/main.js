/*
//Challenge 1
let rNumber = Math.floor(Math.random()*10)+1;
alert(rNumber); //take out before submitting
let uGuess = 0;

while(uGuess !== rNumber) {
    uGuess = parseInt(prompt('Guess a number between 1 and 10'));

    if (uGuess === rNumber){
        alert('You Win!');
    }else{
        alert('Wrong Try Again');
    }
}

//Challenge 2
let uPassword = "";
let uConfirm = "";
uPassword = prompt('Enter a new password');

do {
    uConfirm = prompt('Confirm your password');

    if(uConfirm === uPassword){
        alert('Password Confirmed');
    }else{
        alert('Incorrect Password. Try Again');
    }
} while (uConfirm !== uPassword);

//Challenge 3
let uNumber = 0;
let timesResult = 0;
let resultAlert = "";

uNumber = prompt('Enter a number');

for(let i = 1; i <= 10; i++){
    timesResult = uNumber * i;
    resultAlert = `${uNumber} x ${i} = ${timesResult}`;
    alert(resultAlert); 
}

//Challenge 4
let uGrade = 0;

uGrade = parseInt(prompt('Enter a number between 0 and 100'));

if(uGrade > 100){
    alert('Not a valid grade');
}else if(uGrade >= 90){
    alert('Your grade is a A');
}else if(uGrade >= 80){
    alert('Your grade is a B');
}else if(uGrade >= 70){
    alert('Your grade is a C');
}else if(uGrade >= 60){
    alert('Your grade is a D');
}else if(uGrade >= 0){
    alert('Your grade is a F');
}else if(uGrade < 0){
    alert('Not a valid grade');
}
*/
//Challenge 5
let uDay = 0;

uDay = parseInt(prompt('Enter a number between 1 and 7'));

switch (uDay){
    case 1:
        alert('This is Sunday');
        break;
    case 2:
        alert('This is Monday');
        break;
    case 3:
        alert('This is Tuesday');
        break;
    case 4:
        alert('This is Wednesday');
        break;
    case 5:
        alert('This is Thursday');
        break;
    case 6:
        alert('This is Friday');
        break;
    case 7:
        alert('This is Saturday');
        break;
    default:
        alert('Invalid Input');
        break;
}