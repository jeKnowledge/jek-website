var weAre = [
  "jeK with an uppercase K.",
  "jenólas.",
  "jecnoladge.",
  "jenóledje.",
  "blue.",
  "informal.",
  "professional.",
  "more than an enterprise...",
  "family.",
  "ambitious.",
  "proactive."
];

var selector = 0;
var actionActive = false;

setInterval(function(){
  if(selector < weAre.length) {
    document.querySelector("#we").innerHTML = weAre[selector];
    document.querySelector("#we").classList.add("active");
    if(selector < weAre.length - 1) {
      selector = selector + 1;
    } else {
      selector = 0;
    }
    setTimeout(function(){
      document.querySelector("#we").classList.remove("active");
    }, 3000);
  }
}, 3500);


document.querySelector(".c-hero-ov-3").addEventListener('click', heroAction);
function heroAction() {
  if(!actionActive) {
    window.scroll({
      top: document.querySelector(".c-contact").offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    navbar();
  }
}

window.onscroll = function() {
  if (window.scrollY > document.querySelector(".c-hero-ov-action").offsetTop - 24) {
    document.querySelector(".c-hero-ov-action").classList.add("active");
    document.querySelector(".c-hero-ov-3").classList.add("active");
    document.querySelector(".c-hero-ov-action").classList.remove("still");
    document.querySelector("#action-text").innerHTML = "jeKnowledge";
    var actionDisplaceText = window.innerWidth/2 - document.querySelector("#action-text").offsetWidth/2 - 32;
    var actionDisplaceBall = window.innerWidth/2 - document.querySelector(".c-hero-ov-3").offsetWidth/2 - 24;
    document.querySelector(".c-hero-ov-action").style.transform = "translateX(-" + actionDisplaceText + "px)";
    document.querySelector(".c-hero-ov-action p").style.opacity = "1";
    document.querySelector(".c-hero-ov-3").style.transform = "translateX(" + actionDisplaceBall + "px)";
    document.querySelector(".c-hero-ov-3").style.opacity = "1";
    actionActive = true;
  }
};

function navbar() {
  document.querySelector(".navbar").classList.toggle("active");
  document.querySelector(".c-hero-ov-3").classList.toggle("selected");
  document.querySelector(".c-hero-ov-action").classList.toggle("selected");
}
