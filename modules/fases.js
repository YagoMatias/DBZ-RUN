export default function fases() {
  console.log("oi");
}
class Stages {
  constructor(speed, time) {
    this.speed = speed;
    this.time = time;
  }
  get element() {
    const speedElement = document.querySelector(".kamehameha");
    setTimeout(() => {
      speedElement.style.animationDuration = this.speed;
    }, this.time);
    return speedElement;
  }
}

const stageOne = new Stages("1s", 0);
stageOne.element; // retorna o elemento

const stageTwo = new Stages("0.1s", 6000);
stageTwo.element;
