let homeScore = document.getElementById("homeScore");
let awayScore = document.getElementById("awayScore");
let currentScoreHome = 0;
let currentScoreAway = 0;
let score = document.getElementsByClassName("score'");

function initial(){
  currentScoreHome = 0;
  currentScoreAway = 0;
  homeScore.textContent = currentScoreHome;
  awayScore.textContent = currentScoreAway;
}

function plusOneHome() {
  currentScoreHome += 1;
  homeScore.textContent = currentScoreHome;
}

function plusTwoHome() {
  currentScoreHome += 2;
  homeScore.textContent = currentScoreHome;
}

function plusThreeHome() {
  currentScoreHome += 3;
  homeScore.textContent = currentScoreHome;
}

function plusOneAway() {
  currentScoreAway += 1;
  awayScore.textContent = currentScoreAway;
}

function plusTwoAway() {
  currentScoreAway += 2;
  awayScore.textContent = currentScoreAway;
}

function plusThreeAway() {
  currentScoreAway += 3;
  awayScore.textContent = currentScoreAway;
}
