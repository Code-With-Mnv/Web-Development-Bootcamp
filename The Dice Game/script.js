var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

if (player1 === player2) {
  document.getElementsByTagName("h1")[0].textContent = "It's a Draw!";
} else if (player1 > player2) {
  document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
} else {
  document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!";
}

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "./images/dice" + player1 + ".png");
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "./images/dice" + player2 + ".png");
