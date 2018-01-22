function transitions() {
  var jekerTitles = document.querySelectorAll(".c-jeker h1, .c-jeker h2, .c-jeker h3");
  if (window.scrollY > document.querySelector(".c-jeker").offsetTop - window.innerHeight/2) {
    document.querySelector("body").style.background = "var(--light-blue)";
    for(var i=0; i<jekerTitles.length; i++) {
      jekerTitles[i].style.color = "white";
    }
  }
  if (window.scrollY < document.querySelector(".c-jeker").offsetTop - window.innerHeight/2) {
    document.querySelector("body").style.background = "transparent";
    for(var i=0; i<jekerTitles.length; i++) {
      jekerTitles[i].style.color = "black";
    }
  }
  if (window.scrollY > document.querySelector(".c-jeker").offsetTop + window.innerHeight/2) {
    document.querySelector("body").style.background = "transparent";
    for(var i=0; i<jekerTitles.length; i++) {
      jekerTitles[i].style.color = "black";
    }
  }
};
