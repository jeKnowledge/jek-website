//based on https://codepen.io/tomasmcm/pen/eeJpNb
//scroll controller
var left=0;
//amount of pixels after block has past left side
var bufferSize=0;
//speed of slider
var speed = 1.5;

function slowDown() {
  speed = 1;
}
function slowUp() {
  speed = 1.5;
}

function step(timestamp) {
  left = left - speed;
  checkBlocks();
  document.querySelector(".c-portfolio-slide").style.left = left+"px";

  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

var numberOfBLocks = document.querySelectorAll(".c-project-slide-block").length;
//block closer to left side
var currentBlock = 0;
//current flex-order number
var order = numberOfBLocks + 1;

function checkBlocks(){
  var block = document.querySelectorAll(".c-project-slide-block")[currentBlock]
  if(block.getBoundingClientRect().x < -(block.getBoundingClientRect().width + bufferSize) ) {
    block.style.order=order;
    order ++;
    left+=block.getBoundingClientRect().width;
    currentBlock++;
    if(currentBlock > numberOfBLocks - 1){
      currentBlock = 0;
    }
  }
}
