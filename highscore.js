var highScore = document.querySelector('#highScore');
var remove = document.querySelector('#remove');
var back= document.querySelector('#back');

// event listener for Clearing the highscore.

remove.addEventListener('click',  () => {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem('allScores');
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i<allScores.length; i++) {
        var createLi = document.createElement('li');
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// event listener for go back
back.addEventListener('click', () => {
window.location.replace("./index.html");
});