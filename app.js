'use strict';

//declare variable yes_answers
//yes_answers is an array containing various forms of yes
var yes_answers = ['yes', 'y', 'sure', 'absolutely', 'ok'];

//declare variable no_answers
//no_answers is an array containing various forms of no
var no_answers = ['no', 'n', 'nope', 'absolutely not', 'nah'];


//declare variable lives_in_seattle
var lives_in_seattle;

//lives_in_seattle is assigned the returned value of the prompt
lives_in_seattle = prompt('Hello visitor, let\'s play a guessing game! I\'ll start easy. Do I live in Seattle?').toLowerCase();

//print lives_in_seattle to the console
console.log('Does the user think I live in seattle? ' + lives_in_seattle);

//check if the value stored in lives_in_seattle is present in the yes_answers array or the no_answers array
//prints a different message to the user depending on which array (or neither) includes the value stored in lives_in_seattle
if (yes_answers.includes(lives_in_seattle)) {
    alert('Very good!');
} else if (no_answers.includes(lives_in_seattle)) {
    alert('I\'m very sorry, that\'s incorrect.');
} else {
    alert('I\'m not sure how to interpret your guess. But, yes, I live in Seattle.');
}

//declare variable likes_the_weather
var likes_the_weather;

//likes_the_weather is assigned the returned value of the prompt
likes_the_weather = prompt('Do I like the weather here in Seattle?').toLowerCase();

//print likes_the_weather to the console
console.log('Does the user think I like the weather in Seattle? ' + likes_the_weather);

if (yes_answers.includes(likes_the_weather)) {
    alert('Yes! It\'s so beautiful and rainy!');
} else if (no_answers.includes(likes_the_weather)) {
    alert('Actually, I do. I love the grey, rainy weather.');
} else {
    alert('I\'m not sure how to interpret your guess. But, yes, I love the weather here.');
}

//declare variable drinks_coffee
var drinks_coffee;

//drinks_coffee is assigned the value returned by the prompt
drinks_coffee = prompt('Do I drink coffee?').toLowerCase();

//prints drinks_coffee to the console
console.log('Does the user think I drink coffee? ' + drinks_coffee);

if (yes_answers.includes(drinks_coffee)) {
    alert('Actually, no. Although I live in Seattle, I\'m not a coffee person. I much prefer tea.');
} else if (no_answers.includes(drinks_coffee)) {
    alert('Nice! You\'re right, I much prefer tea.');
} else {
    alert('I\'m not sure how to interpret your guess. But the answer is no, I much perfer tea to coffee.');
}

//declare variable likes_to_read
var likes_to_read;

//likes_to_read is assigned the returned value of the prompt
likes_to_read = prompt('Do I like to read? ').toLowerCase();

//prints likes_to_read to the console
console.log('Does the user think I like to read? ' + likes_to_read);

if (yes_answers.includes(likes_to_read)) {
    alert('Heck yeah I do!');
} else if (no_answers.includes(likes_to_read)) {
    alert('Incorrect. I love reading.');
} else {
    alert('I\'m not sure how to interpret your guess. But I love reading.');
}

//declare variable drives_a_car
var drives_a_car;

//drives_a_car gets assigned the returned value of the prompt
drives_a_car = prompt('Do I drive a car?').toLowerCase();

//print drives_a_car to the console
console.log('Does the user think I drive? ' + drives_a_car);

if (yes_answers.includes(drives_a_car)) {
    alert('Nope! It\'s just me, my feet, and a bus pass.');
} else if (no_answers.includes(drives_a_car)) {
    alert('Correct! I walk and bus everywhere I can (though sometimes I\'ll catch a ride with a friend.)');
} else {
    alert('I\'m not sure how to interpret your guess. But the answer is no, it\'s just me, my feet, and a bus pass. (though sometimes I\'ll catch a ride with a friend.)');
}


/*
//section framework

var ;
 = prompt().toLowerCase();
console.log();

if (yes_answers.includes()) {
    alert();
} else if (no_answers.includes()) {
    alert();
} else {
    alert();
}
*/


/*
//In class demo code notes

var guess = prompt();

var correct_answer = 'no';

if (guess === correct_answer) {
    alert('Yeah!');
} else {
    alert('Nope, try again.');
}
*/