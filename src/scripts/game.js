import Balloon from "./balloon";
import Canvas from "./canvas";
class Game {
  constructor() {
    this.score = 0;
    this.gameScore = document.getElementById('score');
    this.life = 3;
    this.gameLife = document.getElementById('lives')
    this.canvas = new Canvas (1000, 600);
    this.missed = 0;
    this.popCounter = 0;
    this.gamePopCounter = document.getElementById('popCounter');
    this.balloonCount = 5;
    this.attempts = this.popCounter + this.missed;
    addEventListener("keydown", (event) => this.pop(event));
  }
  
  start() {
    this.canvas.balloons.push(new Balloon(), new Balloon(), new Balloon(), new Balloon(), new Balloon());
    this.animate();
  }

  animate(){
    this.increaseBalloonSpeed();
    this.canvas.ctx.clearRect(0, 0, 1000, 600);
    requestAnimationFrame(() => this.animate());
    this.canvas.balloons.forEach((balloon, index) => {
      // if (balloon.x > 960) {
      //   console.log(balloon.x);
      // }
      
      if (balloon.y <= 0) {
        this.missed++;
        this.loseLife();
        console.log(`current life: ${this.life}`);
        this.canvas.balloons.splice(index, 1);

        if (this.life > 0) {
          this.canvas.addBalloon();
        }
        
      }
      
      if (balloon.y > 0) { 
        balloon.move();
        balloon.draw();
      }


    });
    // this.pop();
  }

  loseLife() { 
    this.life--;
    if (this.life >= 0) {
      this.gameLife.textContent = `Lives: ${this.life}`;
    }


    if (this.life === 0) {
      // emptys the array of balloons when game lives equal to 0
      removeEventListener("keydown", (event) => this.pop(event));
      this.canvas.balloons = [];
      console.log(`Total Balloons: ${this.balloonCount}`);
      console.log(`Balloons Popped: ${this.popCounter}`);
      console.log(`Missed balloons: ${this.missed}`);
      this.attempts = this.popCounter + this.missed;
      let percentage = Math.floor(this.popCounter/this.attempts * 100);

      console.log(`Total Attempts: ${this.attempts}`);
      console.log(`Accuracy: ${percentage}%`);
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
          this.gameScore.textContent = `Score: ${this.score}`;
          console.log(`score: ${this.score}`);
          this.canvas.addBalloon();
          this.balloonCount++;
          correctKeyPress = true;
          // Break after the first matching balloon is removed
          this.popCounter++;
          this.gamePopCounter.textContent = `Balloons Popped: ${this.popCounter}`;
          break; 
        } 
      }

      if (!correctKeyPress) {
        this.score--;
        this.gameScore.textContent = `Score: ${this.score}`;
        this.missed++;
        console.log(`score: ${this.score}`);
      }
    }
  }

  increaseBalloonSpeed(){
    if (this.score > 0 && this.score % 10 === 0) {
      Balloon.dy *= 1.0025;
    }
  }

  

}

export default Game;