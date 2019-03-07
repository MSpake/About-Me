'use strict';

//thoughtful, descriptive console logs
//doneish//user story for the ehobbiesperience of interacting with the page
//done//-->fun, intersting, informative ehobbiesperience learning about the page owner
//done//add a question that takes numeric input
//done//-->tell if too high, too low, limit to ehobbiesactly 4 guesses
//add a question with multiple correct answers (stored in an array)
//done//-->6 tries to get one correct, display all correct answers when one is guessed or guess limit is reached
//tally total correct answers given by user and display their total (out of) at the end.
//stretch:
//put all questions, answers, responses for first 5 questions into arrays (or single multidimensional array)
//make the number guessing use a random number



//declare variable yes_answers
//yes_answers is an array containing various forms of yes
//declare variable no_answers
//no_answers is an array containing various forms of no
var yes_answers = ['yes', 'y', 'sure', 'absolutely', 'ok'];
var no_answers = ['no', 'n', 'nope', 'absolutely not', 'nah'];

//declare variable number_of_questions
//declare variable total_correct_guesses
var number_of_questions = 7;
var total_correct_guesses = 0;

//ask for the user's name and assign it to the variable name
var name;
name = prompt('Hello visitor, welcome to my site. What\'s your name?');



//declare variable lives_in_seattle
//lives_in_seattle is assigned the returned value of the prompt
var lives_in_seattle;
lives_in_seattle = prompt('Welcome ' + name + ', let\'s play a guessing game! I\'ll start easy. Do I live in Seattle?').toLowerCase();

//print lives_in_seattle to the console
console.log('Does the user think I live in seattle? ' + lives_in_seattle);

//check if the value stored in lives_in_seattle is present in the yes_answers array or the no_answers array
//prints a different message to the user depending on the result of the check
if (yes_answers.includes(lives_in_seattle)) {
  alert('Very good!');
  console.log('They are correct');
  //increments total correct guesses
  total_correct_guesses++;
} else if (no_answers.includes(lives_in_seattle)) {
  alert('I\'m very sorry, that\'s incorrect.');
  console.log('They are incorrect');
} else {
  alert('I\'m not sure how to interpret your guess. But, yes, I live in Seattle.');
}

//print total_correct_guesses to the console
console.log('Total questions answered correctly: ' + total_correct_guesses);



//declare variable likes_the_weather
//likes_the_weather is assigned the returned value of the prompt
var likes_the_weather;
likes_the_weather = prompt('Do I like the weather here in Seattle?').toLowerCase();

//print likes_the_weather to the console
console.log('Does the user think I like the weather in Seattle? ' + likes_the_weather);

//check if the value stored in likes_the_weather is present in the yes_answers array or the no_answers array
//prints a different message to the user depending on the result of the check
if (yes_answers.includes(likes_the_weather)) {
  alert('Yes! It\'s so beautiful and rainy!');
  console.log('They are correct');
  //increments total correct guesses
  total_correct_guesses++;
} else if (no_answers.includes(likes_the_weather)) {
  alert('Actually, I do. I love the grey, rainy weather.');
  console.log('They are incorrect');
} else {
  alert('I\'m not sure how to interpret your guess. But, yes, I love the weather here.');
}

//print total_correct_guesses to the console
console.log('Total questions answered correctly: ' + total_correct_guesses);

//declare variable drinks_coffee
//drinks_coffee is assigned the value returned by the prompt
var drinks_coffee;
drinks_coffee = prompt('Do I drink coffee?').toLowerCase();

//prints drinks_coffee to the console
console.log('Does the user think I drink coffee? ' + drinks_coffee);

//check if the value stored in drinks_coffee is present in the yes_answers array or the no_answers array
//prints a different message to the user depending on the result of the check
if (yes_answers.includes(drinks_coffee)) {
  alert('Actually, no. Although I live in Seattle, I\'m not a coffee person. I much prefer tea.');
  console.log('They are incorrect');
} else if (no_answers.includes(drinks_coffee)) {
  alert('Nice! You\'re right, I much prefer tea.');
  console.log('They are correct');
  //increments total correct guesses
  total_correct_guesses++;
} else {
  alert('I\'m not sure how to interpret your guess. But the answer is no, I much perfer tea to coffee.');
}

//print total_correct_guesses to the console
console.log('Total questions answered correctly: ' + total_correct_guesses);

//declare variable likes_to_read
//likes_to_read is assigned the returned value of the prompt
var likes_to_read;
likes_to_read = prompt('Do I like to read? ').toLowerCase();

//prints likes_to_read to the console
console.log('Does the user think I like to read? ' + likes_to_read);

//check if the value stored in likes_to_read is present in the yes_answers array or the no_answers array
//prints a different message to the user depending on the result of the check
if (yes_answers.includes(likes_to_read)) {
  alert('Heck yeah I do!');
  console.log('They are correct');
  //increments total correct guesses
  total_correct_guesses++;
} else if (no_answers.includes(likes_to_read)) {
  alert('Incorrect. I love reading.');
  console.log('They are incorrect');
} else {
  alert('I\'m not sure how to interpret your guess. But I love reading.');
}

//print total_correct_guesses to the console
console.log('Total questions answered correctly: ' + total_correct_guesses);

//declare variable drives_a_car
//drives_a_car gets assigned the returned value of the prompt
var drives_a_car;
drives_a_car = prompt('Do I drive a car?').toLowerCase();

//print drives_a_car to the console
console.log('Does the user think I drive? ' + drives_a_car);

//check if the value stored in drives_a_car is present in the yes_answers array or the no_answers array
//prints a different message to the user depending on the result of the check
if (yes_answers.includes(drives_a_car)) {
  alert('Nope! It\'s just me, my feet, and a bus pass.');
  console.log('They are incorrect');
} else if (no_answers.includes(drives_a_car)) {
  alert('Correct! I walk and bus everywhere I can (though sometimes I\'ll catch a ride with a friend.)');
  console.log('They are correct');
  //increments total correct guesses
  total_correct_guesses++;
} else {
  alert('I\'m not sure how to interpret your guess. But the answer is no, it\'s just me, my feet, and a bus pass. (though sometimes I\'ll catch a ride with a friend.)');
}

//print total_correct_guesses to the console
console.log('Total questions answered correctly: ' + total_correct_guesses);



//What follows is a question that takes numeric input
//messages tell the user if their guess is too high or too low
//limit exactly 4 guesses

//variable declaration:
//declare variable years_in_seattle and assign it the value of 6
//declare variable years_guessed
//declare variable guess and assign it a value of 0
//declare variable got_it and assign it a value of false
//declare variable guesses_left and assign it a message fragment
var years_in_seattle = 6;
var years_guessed;
var guess = 0;
var got_it = false;
var guesses_left = 'I\'ll give you 4 guesses';

//do..while loop
//value stored in years_guessed (as returned by prompt) is compared to the value stored in years_in_seattle
//looking for too high, too low, or correct
//limit of 4 guesses
//prints a different message to the user if guess too high, too low, or correct
do {
  years_guessed = prompt('How many years have I lived in Seattle? ' + guesses_left + '.');

  //prints years_guessed to the console
  console.log('User guessed I\'ve been in Seattle for ' + years_guessed + ' years.');

  //compares value stored in guess to value stored in years_in_seattle
  //tells the user if their guess is too high or too low
  //prints a message to the user depending on what they guessed
  //prints too high, too low, or correct to the console
  if (years_guessed > years_in_seattle) {
    alert('Too high!');
    console.log('Guess was too high');
  } else if (years_guessed < years_in_seattle) {
    alert('Too low!');
    console.log('Guess was too low');
  } else if (years_guessed == years_in_seattle) {
    alert('Correct! I\'ve been here 6 years.');
    console.log('They are correct');
    //assigns a value of true to variable got_it if the user guesses correctly
    got_it = true;
    //increments total correct guesses
    total_correct_guesses++;
  } else {
    alert('Not sure how to interpret that.');
  }

  //sets the limit to the number of guesses to 4
  if (guess === 3 && got_it === false) {
    alert('I\'m sorry, you\'ve run out of guesses. The answer is 6 years.');
  }
  //increments guess
  //print remaining number of to user and to console
  guess++;
  guesses_left = ('You have ' + (4 - guess) + ' guesses left');
  console.log('Guesses left: ' + (4 - guess));

} while (guess < 4 && got_it === false);

//print total_correct_guesses to the console
console.log('Total questions answered correctly: ' + total_correct_guesses);




//add a question with multiple correct answers (stored in an array)
//--> 6 tries to get one correct, display all correct answers when one is guessed or guess limit is reached

//declare variable ___, ___ is an array containing all the things
var hobbies = ['reading', 'sewing', 'jewelry making', 'embroidery', 'writting', 'painting', 'drawing'];
var answer;
var found_one = false;
var attempts = 0;
var guesses_remaining = 'I\'ll give you 6 guesses';


//ask for an answer until the user gets one right or runs out of guesses
//limit 6 guesses
//check if array hobbies contains the value contained in answer
do {
  answer = prompt('Can you guess one of my hobbies? ' + guesses_remaining + '.').toLowerCase();
  console.log(answer);
  if (hobbies.includes(answer)) {
    alert('Well done!');
    console.log('A correct guess');
    found_one = true;
    //increments total correct guesses
    total_correct_guesses++;
  } else {
    alert('Nope. (Well...it\'s not one I listed here anyway...)');
    console.log('Inncorrect (probably) guess');
  }
  if (attempts === 5 && found_one === false) {
    alert('I\'m sorry, you\'ve run out of guesses.');
  }
  attempts++;
  guesses_remaining = ('You have ' + (6 - attempts) + ' guesses left');

} while (attempts < 6 && found_one === false);


//define variable hobbies_list and assign it a string value that is a list of all the elements in the hobbies array
//syntax found on Stack Overflow (https://stackoverflow.com/questions/13939573/how-to-add-spaces-between-array-items-javascript)
var hobbies_list = hobbies.join(', ');

alert('Here they are: ' + hobbies_list + '. There are more, but the list was getting long.');

//print total correct guesses to the user and the console
alert('Thanks for playing, ' + name + '! You got ' + total_correct_guesses + ' out of ' + number_of_questions + ' correct.');
console.log('Total questions answered correctly: ' + total_correct_guesses);

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
