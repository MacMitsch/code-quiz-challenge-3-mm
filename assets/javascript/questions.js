const questions = [
  {
    title: "",
    choices: ["", "", "", ""],
    answer: "",
  },
  {
    title: "",
    choices: ["", "", "", ""],
    answer: "",
  },
  {
    title: "",
    choices: ["", "", "", ""],
    answer: "",
  },
  {
    title: "",
    choices: ["", "", "", ""],
    answer: "",
  },
];
// Declared variables
var score = 0;
var questionIndex = 0;

// Start Declared variables
var currentTime = document.querySelector("#currentTime");
var question = document.querySelector("#question");
var timer = document.querySelector("#startTimer");
var wrapper = document.querySelector("#wrapper");

// timer
var seconds = 75;
var hold = 0;
var penalty = 5;
// Create a new element
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
  if (hold === 0) {
    hold = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Time: " + seconds;

      if (seconds <= 0) {
        clearInterval(hold);
        allDone();
        currentTime.textContent = "You are out of time";
      }
    }, 1000);
  }
  render(questionIndex);
});

function render(questionIndex) {
  question.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestions = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;

    question.textContent = userQuestions;
  }
}
