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
      //ativa o pulo do goku
      goku.classList.add("jump");
      setTimeout(() => {
        goku.classList.remove("jump");
      }, 500);
    }
    const loop = setInterval(() => {
      //verifica a posição do goku no display
      const kamePosition = kame.offsetLeft;
      const gokuPosition = +window
        .getComputedStyle(goku)
        .bottom.replace("px", "");
      if (kamePosition <= 180 && kamePosition > 0 && gokuPosition < 110) {
        //encerra o jogo caso o goku seja atingido
        kame.style.animation = "none";
        kame.style.left = `${kamePosition}px`;
        gameOver.style.display = "flex";
        kame.classList.add("parar-tempo");
      }
    }, 10);
    iniciar.style.display = "none";
    kame.classList.add("iniciar-ataque"); //inicia o ataque do kamehameha
    document.addEventListener("keydown", jump);
  }

  start.addEventListener("click", play);

  function reload() {
    //reinicia a pagina
    document.location.reload(false);
  }

  restart.addEventListener("click", reload);
}
