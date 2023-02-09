export default function score() {
  const score = document.querySelector(".score");
  const start = document.querySelector(".start");
  const kame = document.querySelector(".kamehameha");

  function startTime() {
    setInterval(() => {
      if (kame.classList.contains("parar-tempo")) {
        clearInterval(tempo); //pausa o score
      }
    }, 1);
    let i = 0;
    const tempo = setInterval(() => {
      score.innerText = i++; //inicia score e imprime na tela
    }, 500);
  }

  start.addEventListener("click", startTime);
}
