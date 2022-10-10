const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e =>{
    console.log("Cliked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name:username.value
    };
    // INSERT SCORE IN TO ARRAY AND ORDER 5 MORE HIGH
    highScores.push(score);
    highScores.sort((a,b) =>{
        return b.score - a.score;
    })
    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign("./index.html")
   
}