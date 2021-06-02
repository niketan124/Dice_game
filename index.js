var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// selecting dice images.

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImage1);

document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!🎉";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!✨";
} else {
  document.querySelector("h1").innerHTML = "Oops!, It's a Draw!😂";
}
