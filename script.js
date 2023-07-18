// the game will run in an update loop - every frame will have a function called
// this will update the positions and the logic
import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

//selecting the ball html element and creating a new class for that ball to get access here
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new paddle(document.getElementById("player-paddle"))
const computerPaddle = new paddle(document.getElementById("computer-paddle"))

//use the ball element inside the update loop
let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    // ball.update(delta);
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

//call the function
window.requestAnimationFrame(update);
