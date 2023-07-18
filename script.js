// the game will run in an update loop - every frame will have a function called
// this will update the positions and the logic
import { handle } from "express/lib/application.js";
import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

//selecting the ball html element and creating a new class for that ball to get access here
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score") 
const computerScoreElem = document.getElementById("computer-score")

//use the ball element inside the update loop
let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    computerPaddle.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function isLose(){
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}


function handleLose(){
  const rect = ball.rect()
  if(rect.right >= window.innerWidth ){
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
  }else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
  }
    
  ball.reset()
  computerPaddle.reset()
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

//call the function
window.requestAnimationFrame(update);
