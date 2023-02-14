export default function stages() {
  class Stage {
    constructor(speed, time, moment, classe) {
      this.speed = speed;
      this.time = time;
      this.moment = moment;
      this.classe = classe;
    }
    get element() {
      const ElementKame = document.querySelector(".kamehameha");
      const Elementboo = document.querySelector(".boo");
      const speedElement = [ElementKame, Elementboo];

      setTimeout(() => {
        ElementKame.style.animationDuration = this.speed;
      }, this.time);
      setTimeout(() => {
        Elementboo.style.animationDuration = this.speed;
        Elementboo.classList.add(this.classe);
      }, this.moment);

      return speedElement;
    }
  }

  const stageOne = new Stage("1.5s", 0);
  stageOne.element;

  const stageTwo = new Stage("1s", 6000);
  stageTwo.element;

  const stageThree = new Stage("0.7s", 30000, "iniciar-ataque");
  stageThree.element;
}
