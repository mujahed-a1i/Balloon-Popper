import Balloon from "./balloon";
import Canvas from "./canvas";
class Game {
  constructor() {
    this.score = 0;
    this.gameScore = document.getElementsByClassName("score")[0];
    this.life = 3;
    this.gameLife = document.getElementById('lives');
    this.canvas = new Canvas (1000, 600);
    this.missed = 0;
    this.popCounter = 0;
    this.gamePopCounter = document.getElementsByClassName('popCounter')[0];
    this.balloonCount = 5;
    this.attempts = this.popCounter + this.missed;
    this.pausedBalloons = [];
    this.paused = false;
    this.openModal = document.getElementById('openModal');
    this.closeModal = document.getElementById('closeModal');
    this.modal = document.getElementById('instructionModal');
    this.restart = document.getElementById('restart');
   
    addEventListener("keydown", (event) => this.pop(event));
    const disableEscapeKey = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        event.preventDefault();
      }
    };
    addEventListener('keydown', disableEscapeKey);
    this.openModal.addEventListener('click', () => {
      this.pause();
      this.modal.showModal();
    });
    this.closeModal.addEventListener('click', () =>{
      document.removeEventListener('keydown', disableEscapeKey);
      this.modal.close();
      this.resume();
    });

    this.modal.addEventListener('cancel', (event) => {
  
    });

    this.newGame = document.getElementById('newGame');
    this.restart.addEventListener('click', () => {
      // this.canvas.balloons = [];
      // this.reset();
      // this.end();
      window.location.reload();
    });
  }

  pause(){
    this.paused = true;

    this.pausedBalloons = [...this.canvas.balloons];
    this.canvas.balloons = [];
  }

  
  start() {
    this.canvas.balloons.push(new Balloon(), new Balloon(), new Balloon(), new Balloon(), new Balloon());
    this.pause();
    this.modal.showModal();
  }

  reset() {
    this.life = 3;
    this.score = 0;
    this.missed = 0;
    this.popCounter = 0;
    this.balloonCount = 5;
    this.attempts = this.popCounter + this.missed;
    this.pausedBalloons = [];
    this.canvas.balloons = [];
    // this.canvas.balloons.push(new Balloon(), new Balloon(), new Balloon(), new Balloon(), new Balloon());
    this.gameScore.textContent = `Score: ${this.score}`;
    this.gameLife.textContent = `Lives: ${this.life}`;
    this.gamePopCounter.textContent = `Balloons Popped: ${this.popCounter}`;
    // this.paused = false;
    this.start();
    // this.animate();
  }

  end() {
    if (this.life === 0){
      this.canvas.balloons = [];
      this.endGameModal = document.getElementById('endStats');
      // this.endGameModal.showModal();

      let score = document.getElementsByClassName('score')[1];
      let popCounter = document.getElementsByClassName('popCounter')[1];
      let missedBalloons = document.getElementsByClassName('missedBalloons')[0];
      let attempts = document.getElementsByClassName('attempts')[0];
      let accuracy = document.getElementsByClassName('accuracy')[0];
      this.attempts = this.popCounter + this.missed;
      let percentage = Math.floor(this.popCounter/this.attempts * 100);
      score.textContent = `Score: ${this.score}`;
      popCounter.textContent = `Balloons Popped: ${this.popCounter}`;
      missedBalloons.textContent = `Missed balloons: ${this.missed}`;
      attempts.textContent = `Total Attempts: ${this.attempts}`;
      accuracy.textContent = `Accuracy: ${percentage}%`;
      this.endGameModal.showModal();
      this.newGame.addEventListener("click", () => {
        // this.pause();
        // this.endGameModal.close();
        // this.reset();
        window.location.reload();
      }); 
    }
    

  }

  newGame(){
    this.canvas.balloons = [];
    this.canvas.balloons.push(new Balloon(), new Balloon(), new Balloon(), new Balloon(), new Balloon());
    this.score = 0;
    this.life = 3;
    this.missed = 0;
    this.popCounter = 0;
    this.balloonCount = 5;
    this.animate();
  }

  resume() {
    this.paused = false;
    this.canvas.balloons = [...this.pausedBalloons];
    this.pausedBalloons = [];
    this.animate();
  }
 
  animate(){
    if (!this.paused) {
      this.increaseBalloonSpeed();
      this.canvas.ctx.clearRect(0, 0, 1000, 600);
      requestAnimationFrame(() => this.animate());
      this.canvas.balloons.forEach((balloon, index) => {
        this.end();
        if (balloon.y <= 0) {
          this.missed++;
          this.loseLife();
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
    }
  }



  loseLife() { 
    this.life--;
    if (this.life >= 0) {
      this.gameLife.textContent = `Lives: ${this.life}`;
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
      }
    }
  }

  increaseBalloonSpeed(){
    if (this.score > 0 && this.score % 10 === 0) {
      Balloon.dy *= 1.0015;
    }
  }
}

export default Game;