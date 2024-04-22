// use two variable to tack user and computer score
let userScore = 0;
let compScore = 0;

//  all choice accesing
const choices = document.querySelectorAll(".choice");
const msgin = document.querySelector("#msgin");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// to generate computerchoice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //  rock , paper , scissor
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx]; // computerchoice hogi
};

const drawGame = () => {
  msgin.innerText = "Game draw play again !";
  msgin.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msgin.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
    msgin.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msgin.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
    msgin.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice  = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice  = ", compChoice);
  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true; // assuming we win
    if (userChoice === "rock") {
      // paper ,scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // user choice = scissors
      // rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//  get userchoice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
