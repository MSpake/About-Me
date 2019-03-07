'use strict';

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


//stretch goal version of the first five questions, using arrays

//print a welcome mesaage to the user
alert('Welcome ' + name + ', let\'s play a guessing game!');

//declare variable questions that is a multidimensional array
//each element array holds: the text of the question, the correct answer, an empty string (to hold user'd guess), and a response
var questions = [
  ['Do I live in Seattle?', 'yes', '', 'I do live in Seattle.'],
  ['Do I like the weather here?', 'yes', '', 'I love the grey and rainy weather.'],
  ['Do I drink coffee?', 'no', '', 'I much prefer tea.'],
  ['Do I like to read?', 'yes', '', 'I love reading pretty much anything.'],
  ['Do I drive?', 'no', '', 'It\'s just me, my feet, and a bus pass.']
];


//check if their guess is contained in yes_answers or no_answers
//if yes, assign it the coresponding 'yes' or 'no' value
//if not, assign it a value of 'unclear'
for (var i = 0; i < questions.length; i++) {
  //the user is asked the question and their answer is stored in the coesponding array
  questions[i][2] = prompt(questions[i][0]).toLowerCase();
  //print guess to console
  console.log(questions[i][0] + ' The user guessed: ' + questions[i][2]);

  //check if their answer a yes, a no, or something else
  //assign it a coresponding value
  var check_yes_no = function (user_guess) {
  if (yes_answers.includes(user_guess)) {
    user_guess = 'yes';
  } else if (no_answers.includes(user_guess)) {
    user_guess = 'no';
  } else {
    user_guess = 'unclear';
  }

  //check if their answer matches the correct answer
  //print a different message to the user and the console based on correct, not correct, unclear guesses
  if (user_guess === questions[i][1]) {
    alert('Correct! ' + questions[i][3]);
    console.log('They guessed correctly.');
    //increment total_correct_guesses
    total_correct_guesses++;
  } else if (user_guess === 'unclear') {
    alert('I\'m not sure how to interpret your guess. But the answer is ' + questions[i][1] + '. ' + questions[i][3]);
    console.log('Answer unclear');
  } else {
    alert('I\'m sorry, that\'s incorrect. ' + questions[i][3]);
    console.log('They guessed incorrectly.');
  }
  }
check_yes_no(questions[i][2]);

  //print total_correct_guesses to the console
  console.log(total_correct_guesses);
}


//add a sixth question that takes numeric input
//messages tell the user if their guess is too high or too low
//limit exactly 4 guesses

//random number version of question 6

//variable declaration:
//declare variable random_number and assign it a random whole number value between 1 and 10
//declare variable number_guessed
//declare variable guess and assign it a value of 0
//declare variable got_it and assign it a value of false
//declare variable guesses_left and assign it a string value (message fragment)
var random_number = Math.floor((Math.random() * 10) + 1); //syntax found in "JavaScript and JQuery" by Jon Ducket
var number_guessed;
var guess = 0;
var got_it = false;
var guesses_left = 'I\'ll give you 4 guesses';

//print random number to console
console.log(random_number);

//do..while loop
//value stored in number_guessed (as returned by prompt) is compared to the value stored in random_number
//looking for too high, too low, or correct
//limit of 4 guesses
//prints a different message to the user if guess too high, too low, or correct

var number_based_question = function () {
do {
  number_guessed = prompt('I\'m thinking of a number between 1 and 10. Can you guess which one? ' + guesses_left + '.');

  //prints number_guessed to the console
  console.log('User guessed: ' + number_guessed);

  //compares value stored in guess to value stored in random_number
  //tells the user if their guess is too high or too low
  //prints a message to the user depending on what they guessed
  //prints too high, too low, or correct to the console
  if (number_guessed > random_number) {
    alert('Too high!');
    console.log('Guess was too high');
  } else if (number_guessed < random_number) {
    alert('Too low!');
    console.log('Guess was too low');
  } else if (number_guessed == random_number) {
    alert('Correct! I was thinking ' + random_number);
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
    alert('I\'m sorry, you\'ve run out of guesses. I was thinking of ' + random_number);
  }
  //increments guess
  //print remaining guesses message to user and to console
  guess++;
  guesses_left = ('You have ' + (4 - guess) + ' guesses left');
  console.log('Guesses left: ' + (4 - guess));

} while (guess < 4 && got_it === false);
}
number_based_question();



//add a seventh question with multiple correct answers (stored in an array)
//limit 6 tries to get one correct
//display all correct answers when one is guessed or guess limit is reached

//declare variable hobbies and assign it an array of strings (list of hobbies)
//declare variable answer
//declare variable found_one and assign it a value of false
//declare variable attempts and assign it a value of 0
//declare variable guesses_remaining and assign it a string value (message fragment)
var hobbies = ['reading', 'sewing', 'jewelry making', 'embroidery', 'writting', 'painting', 'drawing', 'photography'];
var answer;
var found_one = false;
var attempts = 0;
var guesses_remaining = 'I\'ll give you 6 guesses';


//do..while loop
//answer is assigned the returned value of the prompt and compared to the elemnts in the hobbies array
//limit 6 guesses
//print a different message to the user depending on if answer is included or not

var multi_answer_question = function () {
do {
  answer = prompt('Can you guess one of my hobbies? ' + guesses_remaining + '.').toLowerCase();

  //prints answer to the console
  console.log(answer);

  //check if the hobbies array includes an element with the same value as answer
  //tells the user if they got it right or not
  //prints correct or not correct to the console
  if (hobbies.includes(answer)) {
    alert('Well done!');
    console.log('A correct guess');
    //found_one is assigned a value of true
    found_one = true;
    //increments total correct guesses
    total_correct_guesses++;
  } else {
    alert('Nope. (Well...it\'s not one I listed here anyway...)');
    console.log('Inncorrect (probably) guess');
  }

  //sets the limit to the number of guesses to 6
  if (attempts === 5 && found_one === false) {
    alert('I\'m sorry, you\'ve run out of guesses.');
  }

  //increments attempts
  attempts++;

  //prints remaing guesses messsage to user and console
  guesses_remaining = ('You have ' + (6 - attempts) + ' guesses left');
  console.log('Guesses left: ' + (6 - attempts));


} while (attempts < 6 && found_one === false);
}
multi_answer_question();

//define variable hobbies_list and assign it a string value that is a list of all the elements in the hobbies array
//syntax found on Stack Overflow (https://stackoverflow.com/questions/13939573/how-to-add-spaces-between-array-items-javascript)
var hobbies_list = hobbies.join(', ');

alert('Here they are: ' + hobbies_list + '. There are more, but the list was getting long.');

//print total correct guesses to the user and the console
alert('Thanks for playing, ' + name + '! You got ' + total_correct_guesses + ' out of ' + number_of_questions + ' correct.');
console.log('Total questions answered correctly: ' + total_correct_guesses);
