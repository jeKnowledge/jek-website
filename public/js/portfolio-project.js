function projectContentLoader() {
  portfolioContent = window.portfolioContent;
  var defineLang;

  if(getQueryVariable("lang") == "pt") {
    defineLang = 1;
  }
  if(getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    defineLang = 0;
  }

  let params = (new URL(document.location)).searchParams;
  let projectNumber = params.get("num");

  var thisProject = portfolioContent.feed.entry[projectNumber]
  var thisProjectPT = portfolioContent.feed.entry[projectNumber + defineLang]

  //console.log(thisProject)

  document.querySelector("#author").innerHTML = thisProject.gsx$author.$t;
  document.querySelector("#date").innerHTML = thisProject.gsx$date.$t;
  document.querySelector("#position").innerHTML = thisProject.gsx$position.$t;
  document.querySelector("#title").innerHTML = thisProject.gsx$titles.$t;
  document.querySelector("#short-desc").innerHTML = thisProject.gsx$shortsubtitles.$t;

  var converter = new showdown.Converter();
  var text = thisProject.gsx$text.$t;
  var textTOhtml = converter.makeHtml(text);
  //console.log(textTOhtml);
  document.querySelector("#text").innerHTML = textTOhtml;

  if(thisProject.gsx$image.$t !== "") {
    //console.log(thisProject.gsx$image.$t);
    document.querySelector("#project-image").style.backgroundImage = "url(" + thisProject.gsx$image.$t + ")";
  }

}
