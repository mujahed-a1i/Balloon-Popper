import Balloon from "./balloon";
class Canvas {
  
  constructor(width, height) {
    this.element = document.getElementById('gameScreen');
    // this.element.id = 'gameScreen';
    // document.body.appendChild(this.element); 
    this.ctx = this.element.getContext('2d');
    this.element.width = width;
    this.element.height = height;
    this.balloons = [];
    this.balloon = new Balloon();
    this.image = new Image();
    this.image.src = "./assets/sky.jpg";
  }

  addBalloon() {
    let balloon = new Balloon();
    this.balloons.push(balloon);
    // balloon.draw(this.ctx);
    return balloon;
  }

  
  animate(){
    this.canvas.ctx.clearRect(0, 0, this.element.width, this.element.height);
    requestAnimationFrame(() => this.animate());
    this.balloons.forEach((balloon) => {
      if (balloon.y > this.balloon.radius) { 
        // balloon.y -= 1;
        // if (balloon.x > 25 && balloon.x < 975)
        balloon.move();
        balloon.draw();
        // console.log(balloon.validPos());
      }
    });
  }

  // interval(){
  //   this.addBalloon();
  //   return setInterval(() => this.addBalloon(), 2000);
  // }
}


  


export default Canvas;