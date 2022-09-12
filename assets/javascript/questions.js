const questions = [
  {
    title: "how would you write an IF statement in JavaScript?",
    choices: ["if(i==5)", "if i=5 then", "if i=5 ", "if i==5 then"],
    answer: "if(i==5)"
  },
  {
    title: "What is the first index in an array?",
    choices: ["1", "2", "0", "It can be set"],
    answer: "0"
  },
  {
    title: "What is NOT an example of a Javascript event",
    choices: ["onclick", "onchange", "onhide", "onmouseover"],
    answer: "onhide"
  },
  {
    title: "How do you create a function in JavaScript",
    choices: ["function:myFunction()", "function myFunction()", "function = myFunction()", "function myfunction()"],
    answer: "function myFunction()"
  },
  {
    title:"How do you start a WHILE loop?",
    choices:["while i=0-5","while(i<=5)","while(i>=5:i++)","while i=(5)"],
    answer:"while(i<=5)"
  },
  {
    title:"How do you properly write an Array in JavaScript?",
    choices:["var computers =(0.Dell,1.Mac,2.Asus,3.MSI)","var computers=[Dell,Mac,Asus,MSI]"," var computers = Dell,Mac,Asus,MSI"],
    answer:"var computers=[Dell,Mac,Asus,MSI]"
  },
  {
    title:"is Math.rnd() the proper way to round up an integer in JS?",
    choices:["True","False"],
    answer:"True"
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
var secondsLeft = 200;
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

  userChoices.forEach(function(newItem){
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questions.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  })
}
// Compare choices with the actual answer
function compare(event) {
  var element = event.target;
  if(element.matches("li")) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");
    // correct answer
    if(element.textContent == questions[questionIndex].answer) {
      score++;
      newDiv.textContent = 'Correct!';
    } else {
      secondsLeft = secondsLeft - penalty;
      newDiv.textContent = 'Incorrect, The right answer is: ' + questions[questionIndex].answer;
    }
  }

  // Index to determine the question the user is on.
  questionIndex++;

  if (questionIndex >= questions.length) {
    allDone();
    newDiv.textContent = 'End your score is ' + score
  } else {
    render(questionIndex);
  }
  question.appendChild(newDiv);
}

// Appending last page
function Done() {
  question.innerHTML = '';
  currentTime.innerHTML = '';

  // Heading
  var createH1 = document.createElement('h1');
  createH1.setAttribute('id', 'createH1');
  createH1.textContent = 'You are all done!'

  question.appendChild(createH1);

  // Body Paragraph
  var createPara = document.createElement('p');
  createPara.setAttribute('id','createPara');
  question.appendChild(createPara);

  if (secondsLeft>= 0) {
    var timeRemaining = secondsLeft;
    var createPara2 = document.createElement('p');
    clearInterval(hold);
    createPara.textContent = "Congrats! your final score is " + timeRemaining;

    question.appendChild(createPara2);
  }

  var createLabel = document.createElement('label');
  createLabel.setAttribute('id','createLabel');
  createLabel.textContent = "Please enter you initial"
}
