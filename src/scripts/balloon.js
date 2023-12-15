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
    ctx.fill();; 
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





  
}

// let b1 = new Balloon();
// console.log(b1.letter);
// console.log(b1.color);


export default Balloon;
