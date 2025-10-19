document.addEventListener("DOMContentLoaded", function() {
  let squares = document.querySelectorAll("#board div");
  let currentPlayer = "X";

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");

    squares[i].addEventListener("click", function() {
      if (squares[i].textContent === "") {
        squares[i].textContent = currentPlayer;
        squares[i].classList.add(currentPlayer);

        currentPlayer = currentPlayer === "X" ? "O" : "X";
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
});
