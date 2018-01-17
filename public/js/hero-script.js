var weAre = [
  "jeK with an uppercase K.",
  "jenólas.",
  "jecnoladge.",
  "jenóledje.",
  "blue.",
  "informal.",
  "professional.",
  "more than a company...",
  "family.",
  "ambitious.",
  "proactive."
];

var selector = 0;

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
    }, 2500);
  }
}, 3000);

document.querySelector(".c-hero-ov-3").addEventListener('click', heroAction);
function heroAction() {
  window.scroll({
    top: document.querySelector(".c-contact").offsetTop,
    left: 0,
    behavior: 'smooth'
  });
}
