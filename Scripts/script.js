
//VARIABLES
var timer_score;
//var for interval so it can be reset and manipulated
//create quert selector to dynamicly change the html for each question
var questionTitle = document.querySelector('#questionTitle');
//target p to change the conent on the page 
var paragraphSection = document.querySelector('#p');
//create list to hold the dynamicly generated multiple choice answers 
var ul = document.querySelector('#choices');
//create question counter to iterate through to determine what content to show from an array of questions and possible answers
var questionIndex = 0;
//create var for toggling display of elements 
var display;
//create time and score var that is what gets subtracted when user answers incorrectly
var timerInterval;




//QUESTIONS
  //create array of objects for each question thaat gets itterated through
var questions = [
    {
      title: 'What is the correct JavaScript syntax to change the content of the HTML element: <p id="test">This is a test.</p> ',
      choices: ['document.getElementById("#test").innerHTML = "Hello World!";',
                'get("#test).innerHTML = "Hello World!"', 'grab(test) = "Hello World!"',
                'select("#test).innerHTML = "Hello World!"'],
      answer: 'document.getElementById("#test").innerHTML = "Hello World!";',
    },
    {
      title: 'Where are you supposed to type Javascript if not in its own .js file?',
      choices: ['in an HTML file within "<script></script>" located within the head or body tag',
                'anywhere in CSS or HTML files as long as its in brackets',
                'Only in the HTML within a <div>',
                'in brackets on any file you may have'],
      answer: 'in an HTML file within "<script></script>" located within the head or body tag',
    },
    {
      title: 'In Javascript you would use _______ to keep track of when a button was pressed',
      choices: [
        'a conditioner',
        'a watcher',
        'a toggle status',
        'an event listener',
      ],
      answer: 'an event listener',
    },
    {
      title:
        'Null will result in a Boolean value of: ',
      choices: ['both true and false',
                'invalid because Null is niether true or false',
                'false',
                'true'],
      answer: 'false',
    },
    {
      title:
        'Javascript is almost identical to Java?',
      choices: ['true',
                'false',],
      answer: 'false',
    },
  ];





//query select start button to call function 
var startButton = document
  .querySelector('#startButton')
  .addEventListener('click', startButtonClicked);
//function that sets quiz time and starts itterating through questions
function startButtonClicked(e) {
  var totalTime = 10 * 6,
    display = document.querySelector('#time');
  startTimer(totalTime, display);
  displayQuestion();
}
//create function for submitting question results, when user is correct display it and move on to the next question
//when user is wrong display it, decrease score/time and move to next question
function answerButtonClicked(e) {
  if (this.value !== questions[questionIndex].answer) {
    alert('incorrect');
    timer_score -= 5;
  } else {
    alert('correct');
  }
  questionIndex++;
  displayQuestion();
}
//
function endGame() {
  clearInterval(timerInterval);
  console.log('game over');
  //display results DIV
  document.querySelector('#resultsDIV').style.display = 'block';
  // Hide Choices DIV
  document.querySelector('.container').style.display = 'none';
  // add score final
  document.querySelector('#score').textContent = timer_score;
  document.querySelector('#time').textContent = timer_score;
}
//
function displayQuestion(e) {
  var currentQuestion = questions[questionIndex];
  if (!currentQuestion) {
    return endGame();
  }
  document.querySelector('#questionTitle').textContent = currentQuestion.title;
  document.querySelector('#p').innerHTML = '';
  ul.innerHTML = '';

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var li = document.createElement('li');
    var choiceButton = document.createElement('button');
    choiceButton.setAttribute('value', currentQuestion.choices[i]);
    choiceButton.textContent = currentQuestion.choices[i];
    choiceButton.onclick = answerButtonClicked;
    choiceButton.classList.add('answerChoice');
    li.append(choiceButton);
    ul.append(li);
  }
}
//add logic if timer reaches 0 end quiz
// set timer/score 
var time = document.getElementById('time');
time.addEventListener('click', startButtonClicked);
//
function startTimer(duration, display) {
  timer_score = duration;
  var minutes;
  var seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer_score / 60, 10);
    seconds = parseInt(timer_score % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;
//end quiz if timer reaches 0
    if (--timer_score < 0) {
        endGame();
    }
  }, 1000);
}





//LOCAL STORAGE
// push initials and score to local storage then goes to score page
document.querySelector('#submit').addEventListener('submit', function (event) {
    event.preventDefault();
    var initials = document.querySelector('#initials').value;
    localStorage.setItem(initials, timer_score);
    displayScores();
  });
  
  // pull local storage data to show all scores and initial key value pairings and update DOM
  document.querySelector('#resultsDIV').style.display = 'none';
  document.querySelector('#scoresDIV').style.display = 'none';
  
  document.querySelector('#viewScores').addEventListener('click', displayScores);
  function displayScores() {
    document.querySelector('#scoresDIV').style.display = 'block';
    Object.keys(localStorage).forEach(function (key) {
      console.log(localStorage.getItem(key));
  
      var li = document.createElement('li');
      li.textContent = key + '-' + localStorage.getItem(key);
      document.querySelector('#scoreslist').appendChild(li);
    });
    document.querySelector('.container').style.display = 'none';
    document.querySelector('#resultsDIV').style.display = 'none';
  }
  
window.onload = function () {};
