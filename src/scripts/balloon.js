class Balloon {
  constructor() {
    this.x = Math.floor(25 + Math.random()*(975 - 25 + 1));
    this.y = 630;
    this.radius = 25;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.color = this.randomColor();
    this.letter = this.randomLetter();
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);
    ctx.fill();
    ctx.font = "5px serif";
    ctx.fillText(this.letter, 20, 20); 
    ctx.stroke();
    ctx.closePath();
  }

  randomLetter() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = Math.floor(Math.random() * 26);
    return letters[index];
  }

  randomColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let index = Math.floor(Math.random() * 7);
    return colors[index];

  }

  fly(ctx) {
    let that = this;
    if (this.y === 25) {
      this.clearCircle(ctx, this.x, this.y, this.radius);
    }

    if (this.y > 25) { 
      ctx.clearRect(0, 0, 1000, 600);
      requestAnimationFrame(() => this.fly(ctx));
      // requestAnimationFrame(this.fly.bind(this));
      // let dx = Math.floor(Math.random() * (1 - -1) + -1);
      // this.x += dx;
      this.y -= 1;
      // console.log(this.y);
      this.draw(ctx);
    }
    
  }

  // clearCircle(context,x,y,radius) {
  //   // context.save();
  //   context.beginPath();
  //   context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
  //   context.clip();
  //   context.clearRect(this.x-radius,this.y-radius,this.radius*2,this.radius*2);
  //   // context.restore();
  // }

  // pop(ctx) {
  //   if (this.y === 25) {

  //   }
  // }



  
}

// let b1 = new Balloon();
// console.log(b1.letter);
// console.log(b1.color);


export default Balloon;
