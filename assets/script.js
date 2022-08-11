// ask 5 questions
// create a function for a timer
// create a function for the questions
// create alert for a good question
// create alert for wrong question

// Questions

var startButtonEl = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question");
var resultsContainerEl = document.querySelector("#answer");

const questions = [
  // Question 1
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["section", "button", "main", "body"],
    correctAnswer: "body",
  },
  // Question 2
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    correctAnswer: "forEach()",
    choices: ["while()", "loop()", "None of the above", "forEach()"],
  },
  // Question 3
  {
    question:
      "Which of the following function of Array object adds and/or removes elements from an array?",
    correctAnswer: "splice()",
    choices: ["toSource()", "sort()", "unshift()", "splice()"],
  },
  // Question 4
  {
    question: "Javascript is an _______ language?",
    correctAnswer: "Object-Oriented",
    choices: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "None of the above",
    ],
  },
  // Question 5
  {
    question:
      "When an operator's value is NULL, the typeof returned by the unary operator is:",
    correctAnswer: "Object",
    choices: ["Boolean", "Undefined", "Object", "Integer"],
  },
];

// Welcome text

var welcomeText = document.createElement("h2");
welcomeText.textContent = "Javascript Quiz";
startButtonEl.appendChild(welcomeText);
welcomeText.className = "welcome-text";

// Button Start

var buttonStart = document.createElement("button");
buttonStart.textContent = "Start Quiz";
startButtonEl.appendChild(buttonStart);
buttonStart.className = "principle-btn";

// Question Text

var questionText = document.createElement("h3");
questionText.className = "question-container";
questionContainerEl.appendChild(questionText);

// answer 1
var firstAnswer = document.createElement("button");
firstAnswer.setAttribute("id", "answerA");
firstAnswer.className = " edit-btn";
resultsContainerEl.appendChild(firstAnswer);
// answer 2
var secondAnswer = document.createElement("button");
secondAnswer.setAttribute("id", "answerB");
secondAnswer.className = " edit-btn";
resultsContainerEl.appendChild(secondAnswer);
// answer 3
var thirdAnswer = document.createElement("button");
thirdAnswer.setAttribute("id", "answerC");
thirdAnswer.className = " edit-btn";
resultsContainerEl.appendChild(thirdAnswer);
// answer 4
var fourthAnswer = document.createElement("button");
fourthAnswer.setAttribute("id", "answerD");
fourthAnswer.className = "edit-btn";
resultsContainerEl.appendChild(fourthAnswer);
