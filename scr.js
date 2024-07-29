let result = "";
let computerchoice = "";


const score = JSON.parse(localStorage.getItem("result1")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

function handleClick() {
  window.location.reload();
}

document.getElementById("results").innerHTML = `
<p>Win: ${score.win}</p>
<p>lose: ${score.lose}</p>
<p>tie: ${score.tie}</p>
`;



function computerresponse() {
  const number = Math.random();

  if (number >= 0 && number < 1 / 3) {
    computerchoice = "rock";
  } else if (number >= 1 / 3 && number < 2 / 3) {
    computerchoice = "paper";
  } else if (number >= 2 / 3 && number < 1) {
    computerchoice = "scissor";
  }
  return computerchoice;
}

function checkanswer(cchoice) {
  const computerchoise = computerresponse();
  if (cchoice === "rock") {
    if (computerchoice === "rock") {
      score.tie++;
      result = "tie";
    }
    if (computerchoice === "scissor") {
      score.win++;
      result = "win ";
    }
    if (computerchoice === "paper") {
      score.lose++;
      result = "lose ";
    }
  }

  if (cchoice === "paper") {
    if (computerchoice === "rock") {
      score.win++;
      result = "win";
    }
    if (computerchoice === "scissor") {
      score.lose++;
      result = "lose ";
    }
    if (computerchoice === "paper") {
      score.tie++;
      result = "tie ";
    }
  }

  if (cchoice === "scissor") {
    if (computerchoice === "rock") {
      score.lose++;
      result = "lose ";
    }
    if (computerchoice === "scissor") {
      score.tie++;
      result = "tie";
    }
    if (computerchoice === "paper") {
      score.win++;
      result = "win ";
    }
  }
  localStorage.setItem("result1", JSON.stringify(score));

  document.getElementById("results").innerHTML = `
<p>Win: ${score.win}</p>
<p>lose: ${score.lose}</p>
<p>tie: ${score.tie}</p>
`;    

document.getElementById("who-won").innerHTML = `
<p>You picked ${cchoice}, computer picked ${computerchoice}, you ${result}.</p>
`;

}