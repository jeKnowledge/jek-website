document.querySelector(".c-hero-ov-action").classList.add("active");
if ( !(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))){
  document.querySelector(".c-hero-ov-3").style.mixBlendMode = "screen";
}
document.querySelector(".c-hero-ov-3").classList.add("active");
document.querySelector(".c-hero-ov-4").classList.add("active");
document.querySelector(".c-hero-ov-action").classList.remove("still");
document.querySelector("#action-text").innerHTML = "jeKnowledge";
var actionDisplaceText =
	window.innerWidth / 2 -
	document.querySelector("#action-text").offsetWidth / 2 -
	32;
var actionDisplaceBall =
	window.innerWidth / 2 -
	document.querySelector(".c-hero-ov-3").offsetWidth / 2 -
	24;
var actionDisplaceMenu = actionDisplaceBall - 40;
document.querySelector(".c-hero-ov-action").style.transform =
	"translateX(-" + actionDisplaceText + "px)";
document.querySelector(".c-hero-ov-action p").style.opacity = "1";
document.querySelector(".c-hero-ov-3").style.transform =
	"translateX(" + actionDisplaceBall + "px)";
document.querySelector(".c-hero-ov-4").style.transform =
	"translateX(" + actionDisplaceMenu + "px)";
document.querySelector(".c-hero-ov-3").style.opacity = "1";
document.querySelector(".c-hero-ov-4").style.opacity = "1";

document.querySelector(".c-hero-ov-4").style.transform =
	"translateX(" + actionDisplaceMenu + "px)";
document.querySelector(".c-hero-ov-4").style.width = "36px";
actionActive = true;

document.querySelector(".c-hero-ov-3").addEventListener("click", navbar);
document.querySelector(".c-hero-ov-4").addEventListener("click", navbar);

var className = document.querySelector(".c-hero-ov-4").className;

var classes = className.split(" ");
var num = 0;
for (var i = 0; i < classes.length; i++) {
	if (classes[i].localeCompare("safari") == 0) {
		num = 1;
	}
}

if (num == 0) {
	document.querySelector(".c-hero-ov-4").style.animationName = "layer6";
}

var nav = 0;
var timer = null;

if (window.screen.width > 400) {
	window.onscroll = function () {
		if (nav == 0) {
			document.querySelector(".c-hero-ov-4").style.width = "0px";
		}
		if (timer !== null) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			document.querySelector(".c-hero-ov-4").style.width = "36px";
		}, 150);
	};
}

function navbar() {
	if (nav == 0) {
		nav = 1;
	} else {
		nav = 0;
	}
	document.querySelector(".navbar").classList.toggle("active");
	document.querySelector(".c-hero-ov-3").classList.toggle("selected");
	document.querySelector(".c-hero-ov-4").classList.toggle("selected");
	document.querySelector(".c-hero-ov-action").classList.toggle("selected");
}
