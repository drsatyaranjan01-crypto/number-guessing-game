let randomNumber =
Math.floor(Math.random()*100)+1;

let attempts = 0;

let bestScore =
localStorage.getItem("bestScore") || "-";

document.getElementById("bestScore").innerText =
bestScore;

function checkGuess(){

let guess =
parseInt(
document.getElementById("guessInput").value
);

if(isNaN(guess)){

document.getElementById("message").innerHTML =
"⚠️ Please enter a valid number.";

return;
}

attempts++;

document.getElementById("attempts").innerText =
attempts;

if(guess === randomNumber){

document.getElementById("message").innerHTML =

`
🏆 CONGRATULATIONS! 🎉<br><br>

You guessed the correct number:
<b>${randomNumber}</b><br>

Completed in <b>${attempts}</b> attempts.
`;

if(
bestScore === "-" ||
attempts < bestScore
){

bestScore = attempts;

localStorage.setItem(
"bestScore",
bestScore
);

document.getElementById("bestScore")
.innerText = bestScore;
}

document.body.style.background =
"linear-gradient(135deg,#16a34a,#22c55e)";
}

else if(guess > randomNumber){

document.getElementById("message").innerHTML =
"📈 Too High! Try a smaller number.";
}

else{

document.getElementById("message").innerHTML =
"📉 Too Low! Try a bigger number.";
}
}

function restartGame(){

randomNumber =
Math.floor(Math.random()*100)+1;

attempts = 0;

document.getElementById("attempts").innerText = 0;

document.getElementById("guessInput").value = "";

document.getElementById("message").innerHTML =
"🤔 Start Guessing...";

document.body.style.background =
"linear-gradient(135deg,#0f172a,#1e293b,#334155)";
}
