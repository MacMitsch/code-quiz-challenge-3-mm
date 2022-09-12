const questions = [
  {
    title: "how would you write an IF statement in JavaScript?",
    choices: ["if(i==5)", "if i=5 then", "if i=5 ", "if i==5 then"],
    answer: "if(i==5)",
  },
  {
    title: "What is the first index in an array?",
    choices: ["1", "2", "0", "It can be set"],
    answer: "0",
  },
  {
    title: "What is NOT an example of a Javascript event",
    choices: ["onclick", "onchange", "onhide", "onmouseover"],
    answer: "onhide",
  },
  {
    title: "How do you create a function in JavaScript",
    choices: [
      "function:myFunction()",
      "function myFunction()",
      "function = myFunction()",
      "function myfunction()",
    ],
    answer: "function myFunction()",
  },
  {
    title: "How do you start a WHILE loop?",
    choices: ["while i=0-5", "while(i<=5)", "while(i>=5:i++)", "while i=(5)"],
    answer: "while(i<=5)",
  },
  {
    title: "How do you properly write an Array in JavaScript?",
    choices: [
      "var computers =(0.Dell,1.Mac,2.Asus,3.MSI)",
      "var computers=[Dell,Mac,Asus,MSI]",
      " var computers = Dell,Mac,Asus,MSI",
    ],
    answer: "var computers=[Dell,Mac,Asus,MSI]",
  },
  {
    title: "is Math.rnd() the proper way to round up an integer in JS?",
    choices: ["True", "False"],
    answer: "True",
  },
];

var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var quizTimer = document.querySelector("#gameStart");
var startquiz = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// The timer
var timeLeft = 60;

// Holds time until the quiz starts
var holdInterval = 0;

// penalty time 
var penalty = 5;

// creates new list element
var ulCreate = document.createElement("ul");

// Triggers timer on button and shows timer. Timer starts when they click start quiz
quizTimer.addEventListener("click",() => {
  
  if (holdInterval === 0) {
    holdInterval = setInterval( () => {
      timeLeft--;
      currentTime.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});
// render and loop to go through all questions
function render(questionIndex) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

// Compares selected choice to correct answer
function compare(event) {
  var element = event.target;
  if (element.matches("li")) {
   
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
 
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent =
        "Correct! well done";
    } else {
      // Penalty function triggered to subtract time for wrong answer. 
      timeLeft = timeLeft - penalty;
      createDiv.textContent =
        "Wrong :( The correct answer is " + questions[questionIndex].answer;
    }
  }

  questionIndex++;
  if (questionIndex >= questions.length) {
    Done();

    createDiv.textContent =
      "Congrats on finishing the quiz!" +
      " " +
      "You got " + score + " right out of " +
      questions.length;
  } else {
    render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);
}


function Done() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "All Done!";

  questionsDiv.appendChild(createH1);

  // Paragraph
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  questionsDiv.appendChild(createP);

  // Calculates time and score
  if (timeLeft >= 0) {
    var timeRemaining = timeLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;
    questionsDiv.appendChild(createP2);
  }
// creates label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Please enter your initials: ";
  questionsDiv.appendChild(createLabel);

  // create input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";
// Adds the questionsDiv to the createInput 
  questionsDiv.appendChild(createInput);

  var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");

  createSubmit.textContent = "Submit";
  
  questionsDiv.appendChild(createSubmit);

  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {
      console.log("No value entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      
    // reroute users to scores.html after submitting initials
      window.location.replace("scores.html");
    }
  });
}
