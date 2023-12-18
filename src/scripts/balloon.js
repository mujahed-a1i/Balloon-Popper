class Balloon {
  
  constructor() {
    Balloon.dy = .5;
    this.directions = [this.floatLeft, this.floatRight, this.floatUp];
    this.x = Math.floor(25 + Math.random()*(975 - 25 + 1));
    this.y = 627;
    this.dx = 1;
    this.dy = 1;
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

  draw(ctx) { // Draws the balloon with corresponding Letter
    
    // Draws the balloon
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);
    ctx.fill();; 
    ctx.stroke();
    ctx.closePath();

    // Draws the corresponding letter within the balloon
    ctx.fillStyle = 'white'; // Set the color for the text
    ctx.font = '25px Arial'; // Set the font style
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.letter, this.x, this.y);
  }

  randomLetter() { // Generates random balloon letters
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = Math.floor(Math.random() * 26);
    return letters[index];
  }

  randomColor() { // Generates random balloon color
    const colors = ['red', 'orange', 'green', 'blue', 'indigo', 'violet'];
    let index = Math.floor(Math.random() * 6);
    return colors[index];

  }

  floatRight() { // Balloon direction to NE
    this.x+= this.dx;
    this.y-= Balloon.dy;
  }

  floatLeft(){ // Balloon direction to NW
    this.x-= this.dx;
    this.y-= Balloon.dy;
  }

  floatUp(){ // Balloon direction to N
    this.y-= Balloon.dy;
  }



  
  // }
  validPos() { // checks to see if Balloon is within the canvas
    if ((this.x > this.radius && this.x < 975) && (this.y > this.radius)) {
      return true;
    } 
    return false;
  }

  move(){ // Implementing the balloons animation
    this.moveCounter++;

    if (!this.validPos()) { 
      // if Balloon is leaving the canvas, this will redirect
      this.direction = this.directionExcluder();
      // console.log('change');
    }
    
    if ((this.moveCounter < this.moveLimit) && this.validPos) {
      // While within the canvas, the balloon will 
      // move in one direction X amount
      this.direction();
    } else{
      // Once the balloon reaches the direction limit,
      // the balloon will reset to a new direction
      this.direction = [this.floatLeft, this.floatRight, this.floatUp][Math.floor(Math.random()* 3)];
      this.moveCounter = 0;
      this.moveLimit = Math.floor(Math.random() * (130 - 30 + 1) + 30);
    }
  }
  
  directionExcluder() {
    // this method helps to exclude the direction in which the balloon
    // was cause to leave the direction
    let array = [];
    this.directions.forEach((direction) => {
      if (direction !== this.direction) {
        array.push(direction);
      }
    });
    return array[Math.floor(Math.random() * 2)];
  }
}



export default Balloon;
