function sliderContentLoader() {
  portfolioContent = window.portfolioContent;

  var projectNumber = portfolioContent.feed.entry.length;
  //console.log(projectNumber);

  for(var i=1; i<projectNumber; i++) {
    var container = document.createElement('div');
    container.className = 'c-project-slide-block c-my-flooper__el js-flooper-item';

    var text = document.createElement('div');
    text.className = 'text';

    var title = document.createElement('h3');
    title.className = 's-title title is-3 hightlight';
    title.innerHTML = portfolioContent.feed.entry[i].gsx$titles.$t;

    var br = document.createElement('br');

    var subtitle = document.createElement('h4');
    subtitle.className = 's-text subtitle is-3 hightlight';
    subtitle.innerHTML = portfolioContent.feed.entry[i].gsx$shortsubtitles.$t;

    var content = document.createElement('a');
    content.href = window.location.href + "/views/project/?num=" + i;
    content.className = 'content';
    content.style.backgroundImage = "url('" + portfolioContent.feed.entry[i].gsx$image.$t + "')";

    container.appendChild(text);
    text.appendChild(title);
    text.appendChild(br);
    text.appendChild(subtitle);
    container.appendChild(content);

    document.getElementById("portfolio-slider").appendChild(container);
  }

  let myFlooper = new flooper('.c-project-slide', {
    speed: 0.5,
  });
  myFlooper.init();
}
