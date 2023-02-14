export default function geral() {
  const goku = document.querySelector(".goku");
  const kame = document.querySelector(".kamehameha");
  const boo = document.querySelector(".boo");
  const start = document.querySelector(".start");
  const restart = document.querySelector(".restart");
  const iniciar = document.querySelector(".iniciar");
  const gameOver = document.querySelector(".game-over");

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
      const booPosition = boo.offsetLeft;
      const gokuTopPosition = goku.offsetTop;
      const gokuPosition = +window
        .getComputedStyle(goku)
        .bottom.replace("px", "");
      if (kamePosition <= 180 && kamePosition > 0 && gokuPosition < 110) {
        //encerra o jogo caso o goku seja atingido
        kame.style.animation = "none";
        kame.style.left = `${kamePosition}px`;
        gameOver.style.display = "flex";
        kame.classList.add("parar-tempo");
        boo.style.animation = "none";
        boo.style.left = `${booPosition}px`;
        boo.classList.add("parar-tempo");
      }
      if (booPosition <= 120 && gokuTopPosition < 135) {
        //encerra o jogo caso o goku seja atingido
        boo.style.animation = "none";
        boo.style.left = `${booPosition}px`;
        gameOver.style.display = "flex";
        boo.classList.add("parar-tempo");
        kame.classList.add("parar-tempo");
        kame.style.left = `${kamePosition}px`;
        kame.style.animation = "none";
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
