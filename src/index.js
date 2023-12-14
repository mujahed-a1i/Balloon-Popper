// import Example from "./scripts/example";

document.addEventListener('DOMContentLoaded', () =>  {
  // const main = document.getElementById('main')
  // new Example(main)
  // console.log('hello world');

  const screen = document.getElementById("gameScreen");
  console.log(screen)
  const screenCtx = screen.getContext('2d');
  console.log(screenCtx)
  screenCtx.fillStyle = 'red';
});