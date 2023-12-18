import Balloon from "./balloon";
import Canvas from "./canvas";
class Game {
  constructor() {
    Game.score = 10;
    this.score = 0;
    this.life = 3;
    this.canvas = new Canvas (1000, 600);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // window.addEventListener("keydown", this.handleKeyPress);
    addEventListener("keydown", (event) => this.pop(event));
  }
  
  start() {
    this.animate();
  }

  animate(ctx = this.canvas.ctx){
    ctx.clearRect(0, 0, 1000, 600);
    requestAnimationFrame(() => this.animate());
    this.canvas.balloons.forEach((balloon, index) => {
      this.loseALife();
      if (balloon.y > 25) { 
        balloon.move();
        balloon.draw(ctx);
      }
    });
    // this.pop();
  }

  loseALife() {
    this.canvas.balloons.forEach((balloon, index) => {
      if (balloon.y === balloon.radius) {
        let index = this.canvas.balloons.indexOf(balloon);

        // this.canvas.balloons = this.canvas.balloons.slice(0, index).concat(this.canvas.balloons.slice(index + 1));
        this.canvas.balloons.splice(index, 1);
        this.life--;
        console.log(`current life: ${this.life}`);
      }

      if (this.life === 0) {
        this.canvas.balloons = [];
      }
    });
  }


  pop(event) {
    let correctKeyPress = false;
    for (let i = 0; i < this.canvas.balloons.length; i++) {
      let balloon = this.canvas.balloons[i];
      if (event.key.toUpperCase() === balloon.letter) {
        this.canvas.balloons.splice(i, 1);
        this.score+= 2;
        console.log(`score: ${this.score}`);
        this.canvas.addBalloon();
        // Break after the first matching balloon is removed
        break;
      } 
    }

    if (!correctKeyPress) {
      this.score--;
      console.log(`score: ${this.score}`);
    }

  }


}

export default Game;