function sliderContentLoader() {
  portfolioContent = window.portfolioContent;

  var projectNumber = portfolioContent.length;

  for (var i = projectNumber - 1; i > projectNumber - 5; i--) {
    let portfolioIndex = portfolioContent[i].c;

    var container = document.createElement("div");
    container.className =
      "c-project-slide-block c-my-flooper__el js-flooper-item";

    var text = document.createElement("div");
    text.className = "text";

    var title = document.createElement("h3");
    title.className = "s-title title is-3 hightlight";
    title.innerHTML = portfolioIndex[0].v;

    var br = document.createElement("br");

    var subtitle = document.createElement("h4");
    subtitle.className = "s-text subtitle is-3 hightlight";
    subtitle.innerHTML = portfolioIndex[1].v;

    var content = document.createElement("a");
    content.href = "views/project/?num=" + i;
    content.className = "content";
    content.style.backgroundImage = "url('" + portfolioIndex[2].v + "')";

    container.appendChild(text);
    text.appendChild(title);
    text.appendChild(br);
    text.appendChild(subtitle);
    container.appendChild(content);

    document.getElementById("portfolio-slider").appendChild(container);
  }

  let myFlooper = new flooper(".c-project-slide", {
    speed: 0.5,
  });
  myFlooper.init();
}
