class Balloon {
  constructor() {
    this.pos = [100, 75];
    this.vel = 1;
    this.radius = 25;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.color = this.randomColor();
    this.letter = this.randomLetter();
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, this.endAngle, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    let balloonCTX = this.getContext('2d')
  }

  randomLetter() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = Math.floor(Math.random() * 26);
    return letters[index];
  }

  randomColor() {
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let index = Math.floor(Math.random() * 7);
    return colors[index];

  }

  
}

// let b1 = new Balloon();
// console.log(b1.letter);
// console.log(b1.color);


export default Balloon;
