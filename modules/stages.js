export default function stages() {
  class Stage {
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

  const stageOne = new Stage("1.5s", 0);
  stageOne.element;

  const stageTwo = new Stage("1s", 6000);
  stageTwo.element;

  const stageThree = new Stage("0.7s", 30000);
  stageThree.element;
}
