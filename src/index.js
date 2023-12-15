import Balloon from "./scripts/balloon";
import Canvas from "./scripts/canvas";

document.addEventListener('DOMContentLoaded', () =>  {


  // const screen = document.getElementById("gameScreen");
  // const screenCtx = screen.getContext("2d");
  // screenCtx.fillStyle = "blue";
  // screenCtx.fillRect(10, 10, 100, 100)
  const gameScreen = new Canvas(1000, 600);
  gameScreen.interval();
  gameScreen.animate();

  // let b2 = new Balloon();   
  // b2.draw(screenCtx);  
  // b2.fly(screenCtx);
  // window.b2 = b2;
  // console.log(screenCtx)
  
  

});