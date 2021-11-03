function projectContentLoader() {
  portfolioContent = window.portfolioContent;
  var defineLang;

  if (getQueryVariable("lang") == "pt") {
    defineLang = 1;
  }
  if (getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    defineLang = 0;
  }

  let params = new URL(document.location).searchParams;
  let projectNumber = params.get("num");

  var thisProject = portfolioContent[projectNumber].c;
  // var thisProjectPT = portfolioContent[projectNumber + defineLang].c;

  //console.log(thisProject)

  console.log(thisProject);

  document.querySelector("#author").innerHTML = thisProject[4].v;
  document.querySelector("#date").innerHTML = thisProject[6].v;
  document.querySelector("#position").innerHTML = thisProject[5].v;
  document.querySelector("#title").innerHTML = thisProject[0].v;
  document.querySelector("#short-desc").innerHTML = thisProject[3].v;

  var converter = new showdown.Converter();
  var text = thisProject[3].v;
  var textTOhtml = converter.makeHtml(text);
  //console.log(textTOhtml);
  document.querySelector("#text").innerHTML = textTOhtml;

  if (thisProject[2].v !== "") {
    document.querySelector("#project-image").style.backgroundImage =
      "url(" + thisProject[2].v + ")";
  }
}
