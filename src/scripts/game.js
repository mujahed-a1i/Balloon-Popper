import Balloon from "./balloon";
import Canvas from "./canvas";
class Game {
  constructor() {
    Game.score = 10;
    this.score = 0;
    this.life = 3;
    this.canvas = new Canvas (1000, 600);
    addEventListener("keydown", (event) => this.pop(event));
    
  }
  
  start() {
    this.canvas.balloons.push(new Balloon(), new Balloon(), new Balloon(), new Balloon(), new Balloon());
    this.animate();
    
  }

  animate(ctx = this.canvas.ctx){
    this.increaseBalloonSpeed();
    ctx.clearRect(0, 0, 1000, 600);
    requestAnimationFrame(() => this.animate());
    this.canvas.balloons.forEach((balloon, index) => {
      if (balloon.y <= balloon.radius) {
        this.loseLife();
        this.canvas.balloons.splice(index, 1);
        console.log(`current life: ${this.life}`);
      }
      
      if (balloon.y > balloon.radius) { 
        balloon.move();
        balloon.draw(ctx);
      }


    });
    // this.pop();
  }

  loseLife() { 
    // Loses a life when the balloon reaches to the top of the game screen
    // this.canvas.balloons.forEach((balloon, index) => {
    //   if (balloon.y <= balloon.radius) {
    //     let index = this.canvas.balloons.indexOf(balloon);
    //     this.canvas.balloons.splice(index, 1);
    //     this.life--;
    //     this.canvas.addBalloon();
    //     console.log(`current life: ${this.life}`);
    //   }

    //   if (this.life === 0) {
    //     // emptys the array of balloons when game lives equal to 0
    //     this.canvas.balloons = [];
    //   }
    // });
    this.life--;

    if (this.life === 0) {
      // emptys the array of balloons when game lives equal to 0
      this.canvas.balloons = [];
    }

    
  }


  pop(event) {
    if (event.keyCode > 64 && event.keyCode < 91) {
      // checking to see if the keypress is only alphabetical chars
      let correctKeyPress = false;
      for (let i = 0; i < this.canvas.balloons.length; i++) {
        let balloon = this.canvas.balloons[i];
        if (event.key.toUpperCase() === balloon.letter) {
          // if the keypress matches the balloon's letter
          // the balloon will be removed from the array
          // Once 1 balloon is removed, another one is being added.
          this.canvas.balloons.splice(i, 1);
          this.score++;
          console.log(`score: ${this.score}`);
          this.canvas.addBalloon();
          correctKeyPress = true;
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

  increaseBalloonSpeed(){
    if (this.score > 0 && this.score % 10 === 0) {
      Balloon.dy *= 1.003;
    }
  }

  

}

export default Game;