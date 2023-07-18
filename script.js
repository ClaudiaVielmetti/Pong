// the game will run in an update loop - every frame will have a function called
// this will update the positions and the logic
import Ball from "./Ball.js";

//selecting the ball html element and creating a new class for that ball to get access here
const ball = new Ball(document.getElementById("ball"));

//use the ball element inside the update loop
let lastTime;
function update(time) {
  if (lastTime) {
    const delta = time - lastTime;
    ball.update(delta);
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

//call the function
window.requestAnimationFrame(update);
