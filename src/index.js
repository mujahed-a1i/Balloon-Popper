import Balloon from "./scripts/balloon";

document.addEventListener('DOMContentLoaded', () =>  {


  const screen = document.getElementById("gameScreen");
  const screenCtx = screen.getContext("2d");
  // screenCtx.fillStyle = "blue";
  // screenCtx.fillRect(10, 10, 100, 100)
  let b2 = new Balloon();   
  b2.draw(screenCtx);  

  
  console.log(screen);
  console.log(b2.letter);
  window.b2 = b2;
  // console.log(screenCtx)
  

});