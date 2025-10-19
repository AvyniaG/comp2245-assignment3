document.addEventListener("DOMContentLoaded", function() {
  let squares = document.querySelectorAll("#board div");
  let currentPlayer = "X";
  let statusDiv = document.getElementById("status");
  let gameOver = false;

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");

    squares[i].addEventListener("click", function() {
      if (squares[i].textContent === "" && !gameOver) {
        squares[i].textContent = currentPlayer;
        squares[i].classList.add(currentPlayer);

        if (checkWinner(currentPlayer)) {
          if (statusDiv) {
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add("you-won");
          }
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });

    squares[i].addEventListener("mouseover", function() {
      if (squares[i].textContent === "") {
        squares[i].classList.add("hover");
      }
    });
    squares[i].addEventListener("mouseout", function() {
      squares[i].classList.remove("hover");
    });
  }

  function checkWinner(player) {
    const winCombos = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]           
    ];

    return winCombos.some(combo => {
      return combo.every(index => {
        return squares[index].textContent === player;
       });
    });
  }
      const newGame = document.querySelector(".btn");

  newGame.addEventListener("click", function() {

    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
      squares[i].classList.remove("X", "O");
    }

    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");


    currentPlayer = "X";
    gameOver = false;
  });

});
