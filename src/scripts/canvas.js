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
    this.balloons.forEach((balloon) => {
      if (balloon.y > 25) { 
        ctx.clearRect(0, 0, 1000, 600);
        requestAnimationFrame(() => balloon.fly(ctx));

        balloon.y -= 1;
        // console.log(balloon.y);
        balloon.draw(ctx);
      }
    });
  }


  
}

export default Canvas;