var partner = [];
var numPartner = 0;

if(window.innerWidth > 860) {
 numPartner = 36;
}
if(window.innerWidth < 860) {
 numPartner = 14;
}

for(var i=0; i<numPartner; i++) {
  partner.push(document.createElement('div'));
  partner[i].className = 'partner partner' + i;
  document.querySelector('.c-partner').appendChild(partner[i]);
}

let myFlooper2 = new flooper('.js-flooper2', {
  autoPlay: false,
  bufferSize: 10,
  speed: 0.2,
  onFloop: () => {}, //noop
  onStart: () => {}, //noop
  onPlay: () => {}, //noop
  onPause: () => {}, //noop
  onSlowmotion: () => {}, //noop
});

if(window.innerWidth > 840) {
  myFlooper2.init();
}

document.querySelector('.arrow.right').addEventListener("mouseover", speedUp);
document.querySelector('.arrow.right').addEventListener("mouseout", speedDown);

function speedUp() {
  myFlooper2.play();
  myFlooper2.speed = 3;
}
function speedDown() {
  myFlooper2.speed = 0.2;
}
