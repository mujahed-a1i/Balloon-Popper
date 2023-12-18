class Balloon {
  static dy = 1;
  constructor() {
    
    this.element = document.getElementById('gameScreen');
    // this.element.id = 'gameScreen';
    // document.body.appendChild(this.element); 
    this.ctx = this.element.getContext('2d');
    this.images = [
      "./assets/balloons/pink.png", 
      "./assets/balloons/blue.png", 
      "./assets/balloons/green.png", 
      "./assets/balloons/red.png", 
      "./assets/balloons/purple.png",
      "./assets/balloons/yellow.png",
      "./assets/balloons/babyBlue.png",
      "./assets/balloons/darkGreen.png",
      "./assets/balloons/darkRed.png",
      "./assets/balloons/babyPink.png"
    ];
    this.image = new Image();
    this.image.src = this.images[Math.floor(Math.random() * this.images.length)];
    this.image.onload = this.draw.bind(this);
    this.width = this.image.width;
    this.height = this.image.height;
    this.directions = [this.floatLeft, this.floatRight, this.floatUp];
    this.radius = this.image.width / 2;
    this.x = Math.floor(this.width + Math.random()*(1000 - this.width + 1));
    this.y = 627;
    this.dx = 1;
    this.dy = .6;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    // this.color = this.randomColor();
    this.letter = this.randomLetter();
    this.moveCounter = 0;
    this.moveLimit = Math.floor(Math.random() * (140 - 40 + 1) + 40);
    this.direction = [this.floatLeft, this.floatRight, this.floatUp][Math.floor(Math.random()* 3)];
  }



  draw() { // Draws the balloon with corresponding Letter

    // Draws the balloon
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, this.endAngle, true);
    // ctx.fill();; 
    // ctx.stroke();
    // ctx.closePath();
    this.ctx.drawImage(this.image,this.x, this.y);

    // Draws the corresponding letter within the balloon
    this.ctx.fillStyle = 'white'; // Set the color for the text
    this.ctx.font = '25px Arial'; // Set the font style
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(this.letter, this.x + 27, this.y + 30);
  }

  randomLetter() { // Generates random balloon letters
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = Math.floor(Math.random() * 26);
    return letters[index];
  }

  // randomColor() { // Generates random balloon color
  //   const colors = ['red', 'orange', 'green', 'blue', 'indigo', 'violet'];
  //   let index = Math.floor(Math.random() * 6);
  //   return colors[index];

  // }

  floatRight() { // Balloon direction to NE
    this.x+= this.dx;
    this.y-= this.dy * Balloon.dy;
  }

  floatLeft(){ // Balloon direction to NW
    this.x-= this.dx;
    this.y-= this.dy * Balloon.dy;
  }

  floatUp(){ // Balloon direction to N
    this.y-= this.dy * Balloon.dy;
  }



  
  // }
  validPos() { // checks to see if Balloon is within the canvas
    if ((this.x > this.width && this.x < 1000 - this.width) && (this.y > 0)) {
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
