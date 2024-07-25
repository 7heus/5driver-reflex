const game = new Game();
window.onload = function () {
  const startBtn = document.getElementById("start-button");
  const restartBtn = document.getElementById("restart-button");

  startBtn.addEventListener("click", () => {
    game.startGame();
  });

  restartBtn.addEventListener("click", () => {
    location.reload();
  });
};

window.onresize = function () {
  game.onResize();
};
