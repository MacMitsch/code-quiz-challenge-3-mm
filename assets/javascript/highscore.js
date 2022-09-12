var highScore = document.querySelector('#highScore');
var remove = document.querySelector('#remove');
var Back= document.querySelector('#back');

// event listener for Clearing the highscore.

remove.addEventListener('click',  () => {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem('Scores');
allScores = JSON.parse(allScores);

if (allscores !== null) {
    for (var i = 0; i<allScores.length; i++) {
        var createLi = document.createElement('li');
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// event listener for go back
WebGLTransformFeedback.addEventListener('click', () => {
window.location.replace("./index.html");
});