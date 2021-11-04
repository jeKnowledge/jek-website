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
var timer = null;
var nav = 0;

setInterval(function () {
	if (selector < weAre.length) {
		document.querySelector("#we").innerHTML = weAre[selector];
		document.querySelector("#we").classList.add("active");
		if (selector < weAre.length - 1) {
			selector = selector + 1;
		} else {
			selector = 0;
		}
		setTimeout(function () {
			document.querySelector("#we").classList.remove("active");
		}, 3000);
	}
}, 3500);

document.querySelector(".c-hero-ov-3").addEventListener("click", heroAction);
function heroAction() {
	if (!actionActive) {
		window.scroll({
			top: document.querySelector(".c-contact").offsetTop,
			left: 0,
			behavior: "smooth"
		});
	} else {
		navbar();
	}
}

document.querySelector(".c-hero-ov-4").addEventListener("click", heroAction);
function heroAction() {
	if (!actionActive) {
		window.scroll({
			top: document.querySelector(".c-contact").offsetTop,
			left: 0,
			behavior: "smooth"
		});
	} else {
		navbar();
	}
}

window.onscroll = function () {
	if (
		window.scrollY >
		document.querySelector(".c-hero-ov-action").offsetTop - 24
	) {
		if ( !(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) && !document.querySelector(".c-hero-ov-3").classList.contains("safari")){
			document.querySelector(".c-hero-ov-3").style.mixBlendMode = "screen";
		}
		document.querySelector(".c-hero-ov-action").classList.add("active");
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
		document.querySelector(".c-hero-ov-3").style.opacity = "1";
		document.querySelector(".c-hero-ov-4").style.transform =
			"translateX(" + actionDisplaceMenu + "px)";
		document.querySelector(".c-hero-ov-4").style.opacity = "1";

		var className = document.querySelector(".c-hero-ov-4").className;

		var classes = className.split(" ");
		var num = 0;
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].localeCompare("safari") == 0) {
				num = 1;
			}
		}

		if (num == 0) {
			document.querySelector(".c-hero-ov-4").style.animationName =
				"layer6";
		}

		actionActive = true;

		if (window.screen.width > 400) {
			if (
				(window.scrollY >
					document.querySelector(".c-hero-ov-action").offsetTop +
						850 ||
					window.scrollY <
						document.querySelector(".c-hero-ov-action").offsetTop +
							800 ||
					window.scrollY <
						document.querySelector(".c-hero-ov-action").offsetTop +
							600) &&
				nav == 0
			) {
				document.querySelector(".c-hero-ov-4").style.width = "0px";
			}
		}
	}

	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(function () {
		document.querySelector(".c-hero-ov-4").style.width = "36px";
	}, 150);
};

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
