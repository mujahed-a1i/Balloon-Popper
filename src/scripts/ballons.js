class Ballons {
  constructor() {
    this.x = 100;
    this.y = 75;
    this.radius = 50;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.color = "#" + Math.floor(Math.random()*16777215).toString(16)
  }

  
}


b1 = new Ballons()
console.log(b1.color)
// export default Ballons