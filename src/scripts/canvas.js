import Balloon from "./balloon";
class Canvas {
  constructor(width, height) {
    this.element = document.createElement('canvas');
    this.element.id = 'gameScreen';
    document.body.appendChild(this.element);
    this.ctx = this.element.getContext('2d');
    this.element.width = width;
    this.element.height = height;
    this.balloons = [];
  }

  addBalloon() {
    let balloon = new Balloon();
    this.balloons.push(balloon);
    balloon.draw(this.ctx);
    return balloon;
  }

  animate(ctx = this.ctx){
    ctx.clearRect(0, 0, 1000, 600);
    requestAnimationFrame(() => this.animate());
    this.balloons.forEach((balloon) => {
      if (balloon.y > 25) { 
        // balloon.y -= 1;
        // if (balloon.x > 25 && balloon.x < 975)
        balloon.move();
        balloon.draw(ctx);
        // console.log(balloon.validPos());
      }
    });
    
  }

  interval(){
    this.addBalloon();
    return setInterval(() => this.addBalloon(), 2000);
  }
}


  


export default Canvas;