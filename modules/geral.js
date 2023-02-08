export default function geral() {
  const goku = document.querySelector(".goku");
  const kame = document.querySelector(".kamehameha");
  const start = document.querySelector(".start");
  const restart = document.querySelector(".restart");
  const iniciar = document.querySelector(".iniciar");
  const gameOver = document.querySelector(".game-over");
  const score = document.querySelector(".score");

  function play() {
    // ------------------------GAMEPLAY-----------------------------
    function jump() {
      goku.classList.add("jump");
      setTimeout(() => {
        goku.classList.remove("jump");
      }, 500);
    }
    const loop = setInterval(() => {
      const kamePosition = kame.offsetLeft;
      const gokuPosition = +window
        .getComputedStyle(goku)
        .bottom.replace("px", "");
      if (kamePosition <= 180 && kamePosition > 0 && gokuPosition < 110) {
        kame.style.animation = "none";
        kame.style.left = `${kamePosition}px`;
        gameOver.style.display = "flex";
        clearInterval(tempo);
      }
    }, 10);
    iniciar.style.display = "none";
    kame.classList.add("iniciar-ataque");
    document.addEventListener("keydown", jump);

    // ---------------------- SCORE ----------------------------------
    let i = 0;
    const tempo = setInterval(() => {
      score.innerText = i++;
    }, 1000);
  }

  start.addEventListener("click", play);

  function reload() {
    document.location.reload(false);
  }

  restart.addEventListener("click", reload);
}
