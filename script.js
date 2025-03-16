window.addEventListener("DOMContentLoaded", tenSeconds);
let	reminder;

function tenSeconds(){
	let reminder = setInterval(myfun, 1000000);
	function myfun(){
		alert("Ten seconds have passed hurry up before time runs out")
	}
}

function stopTenSeconds(){
	clearInterval(reminder);
}

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let guessCount = 1;


document.addEventListener("DOMContentLoaded", start);
function start(){
	var obj = document.getElementById("myBtn");
	obj.addEventListener("click", playAudio);
}

function playAudio(){
	var	audioObject = "audios/win.mp3";
	audioObject = new Audio(audioObject);
	audioObject.play()
}

let	guesses = document.querySelector(".guesses");
let result = document.querySelector(".result");
let comparison = document.querySelector(".comparison");
let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");
let winningSound = new Audio("audio/win.mp3");
let losingSound = new Audio("ausio/lose.mp3")

function checkGuess(){
	let userGuess = Number(guessField.value);
	if (guessCount === 1){
		guesses.textContent = "Previous Guesses: ";
	}
	guesses.textContent = guesses.textContent + userGuess + " ";

	if (userGuess === randomNum) {
		result.textContent = "Congratulations! You saved Joy and Bing bong!! :)"
		result.style.backgroundColor = "green";
		playAudio();
		comparison.textContent = "";
		alert("The password is correct! You powered the wagon successfully, let's escape the Memory Dump now!")
		setGameOver();

	}else{
		switch(guessCount){
			case 10:
				result.textContent = "No way out!!! We are trapped here forever!!! :(";
				comparison.textContent = "";
				losingSound.play();
				alert("You guessed incorrectly too many times, the wagon is now broken! you are trapped here forever!!!");
				setGameOver()
				break;
			default:
				result.textContent = "Wrong password!";
				result.style.backgroundColor = "red";
				if(userGuess < randomNum) {
					comparison.textContent = "Your guess was too low!";
				} else if(userGuess > randomNum) {
					comparison.textContent = " Your guess was too high";
				}
		}
	}


	guessCount++;
	guessField.value = "";

}




guessSubmit.addEventListener("click", checkGuess);


function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	stopTenSeconds();
}
