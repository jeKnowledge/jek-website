function portfolioAll() {
  portfolioContent = window.portfolioContent;

  var projectNumber = portfolioContent.length;
  // console.log(projectNumber);

  for (var i = projectNumber - 1; i > 0; i--) {
    let portfolioIndex = portfolioContent[i].c;

    var container = document.createElement("a");
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

    var content = document.createElement("div");
    var currentAddress = window.location.origin;
    container.href = currentAddress + "/views/project/?num=" + i;
    content.className = "content";
    content.style.backgroundImage = "url('" + portfolioIndex[2].v + "')";

    container.appendChild(text);
    text.appendChild(title);
    text.appendChild(br);
    text.appendChild(subtitle);
    container.appendChild(content);

    document.getElementById("c-portfolio").appendChild(container);
  }
}
