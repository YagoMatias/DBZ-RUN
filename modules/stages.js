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
      const iniciar = document.querySelector(".iniciar");
      const speedElement = [ElementKame, Elementboo];

      setTimeout(() => {
        setInterval(() => {
          iniciar.classList.contains("iniciou")
            ? (ElementKame.style.animationDuration = this.speed)
            : "não contem";
        }, this.time);
      }, 5);

      setTimeout(() => {
        Elementboo.style.animationDuration = this.speed;
        setInterval(() => {
          iniciar.classList.contains("iniciou")
            ? Elementboo.classList.add(this.classe)
            : "não contem";
        }, 5);
      }, this.moment);

      return speedElement;
    }
  }

  const stageOne = new Stage("1.5s", 0);
  stageOne.element;

  const stageTwo = new Stage("1s", 6000);
  stageTwo.element;

  const stageThree = new Stage("1s", 30000, 30000, "iniciar-ataque");
  stageThree.element;

  const stageFour = new Stage("0.7s", 60000, 60000, "iniciar-ataque");
  stageFour.element;
}
