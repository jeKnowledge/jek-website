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

document.querySelector(".c-hero-ov-3").addEventListener('click', navbar);

function navbar() {
  document.querySelector(".navbar").classList.toggle("active");
  document.querySelector(".c-hero-ov-3").classList.toggle("selected");
  document.querySelector(".c-hero-ov-action").classList.toggle("selected");
}
