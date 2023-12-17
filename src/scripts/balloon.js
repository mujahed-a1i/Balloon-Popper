class Balloon {
  
  constructor() {
    this.directions = [this.floatLeft, this.floatRight, this.floatUp];
    this.x = Math.floor(25 + Math.random()*(975 - 25 + 1));
    this.y = 627;
    this.dx = 1;
    this.dy = 1;
    this.trueX = this.x * 1;
    this.radius = 25;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.color = this.randomColor();
    this.letter = this.randomLetter();
    this.moveCounter = 0;
    this.moveLimit = Math.floor(Math.random() * (140 - 40 + 1) + 40);
    // this.direction = ['right-up', 'left-up'][Math.floor(Math.random()* 2)];
    this.direction = [this.floatLeft, this.floatRight, this.floatUp][Math.floor(Math.random()* 3)];
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);
    ctx.fill();; 
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'white'; // Set the color for the text
    ctx.font = '25px Arial'; // Set the font style
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.letter, this.x, this.y);
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

  floatRight() {
    this.x+= this.dx;
    this.y-= this.dy;
  }

  floatLeft(){
    this.x-= this.dx;
    this.y-= this.dy;
  }

  floatUp(){
    this.y-= this.dy;
  }



  
  // }
  validPos() {
    if ((this.x > 25 && this.x < 975) && (this.y > 25)) {
      return true;
    } 
    return false;
  }
  move(){
    this.moveCounter++;
    // console.log(this.directions);
    // console.log(this.directionExcluder());
    if (!this.validPos()) {
      this.direction = this.directionExcluder();
      console.log('change');
    }
    
    if ((this.moveCounter < this.moveLimit) && this.validPos) {
      this.direction();
    } else{
      this.direction = [this.floatLeft, this.floatRight, this.floatUp][Math.floor(Math.random()* 3)];
      this.moveCounter = 0;
      this.moveLimit = Math.floor(Math.random() * (130 - 30 + 1) + 30);
    }
  }
  
  directionExcluder() {
    let array = [];
    this.directions.forEach((direction) => {
      if (direction !== this.direction) {
        array.push(direction);
      }
    });
    return array[Math.floor(Math.random() * 2)];
  }
}

// let b1 = new Balloon();
// console.log(b1.letter);
// console.log(b1.color);


export default Balloon;
