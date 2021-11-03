function teamAll() {
  teamContent = window.teamContent;

  var allJekers = teamContent.length;

  console.log(teamContent);

  for (var i = 1; i < allJekers; i++) {
    let teamIndex = teamContent[i].c;

    var text = document.createElement("div");
    text.className = "jekerTextALL";

    var text = document.createElement("div");
    text.className = "s-title title is-3 jekerTextALL jekerText";
    text.innerHTML = teamIndex[0].v;

    subtext = document.createElement("div");
    subtext.className = "s-text subtitle is-3 jekerTextALL jekerText";
    var teamPosition = teamIndex[1].v;
    var teamCourse = teamIndex[2].v;
    var teamDep = teamIndex[4].v;
    subtext.innerHTML = teamPosition + "<br />" + teamCourse;

    var jeker = document.createElement("div");
    jeker.className = "allJekers jekers";

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    jeker.style.backgroundImage = "url('" + teamIndex[3].v + "')";

    document.querySelector(".c-jekers").appendChild(jeker);
    jeker.style.display = "none";

    if (teamDep.localeCompare("Direcao") == 0) {
      var text = document.createElement("div");
      text.className = "jekerTextALL";

      var text = document.createElement("div");
      text.className = "s-title title is-3 jekerTextALL jekerText";
      text.innerHTML = teamIndex[0].v;

      subtext = document.createElement("div");
      subtext.className = "s-text subtitle is-3 jekerTextALL jekerText";
      subtext.innerHTML = teamPosition + "<br />" + teamCourse;

      var jeker = document.createElement("div");
      jeker.className = "dirJekers jekers";
    }

    if (teamDep.localeCompare("Tech") == 0) {
      var text = document.createElement("div");
      text.className = "jekerTextTECH";

      var text = document.createElement("div");
      text.className = "s-title title is-3 jekerTextTECH jekerText";
      text.innerHTML = teamIndex[0].v;

      subtext = document.createElement("div");
      subtext.className = "s-text subtitle is-3 jekerTextTECH jekerText";
      subtext.innerHTML = teamPosition + "<br />" + teamCourse;

      var jeker = document.createElement("div");
      jeker.className = "techJekers jekers";
    }

    if (teamDep.localeCompare("Inovacao") == 0) {
      var text = document.createElement("div");
      text.className = "jekerTextINNOVATION";

      var text = document.createElement("div");
      text.className = "s-title title is-3 jekerTextINNOVATION jekerText";
      text.innerHTML = teamIndex[0].v;

      subtext = document.createElement("div");
      subtext.className = "s-text subtitle is-3 jekerTextINNOVATION jekerText";
      subtext.innerHTML = teamPosition + "<br />" + teamCourse;

      var jeker = document.createElement("div");
      jeker.className = "innovationJekers jekers";
    }

    if (teamDep.localeCompare("Interno") == 0) {
      var text = document.createElement("div");
      text.className = "jekerTextINTERN";

      var text = document.createElement("div");
      text.className = "s-title title is-3 jekerTextINTERN jekerText";
      text.innerHTML = teamIndex[0].v;

      subtext = document.createElement("div");
      subtext.className = "s-text subtitle is-3 jekerTextINTERN jekerText";
      subtext.innerHTML = teamPosition + "<br />" + teamCourse;

      var jeker = document.createElement("div");
      jeker.className = "internJekers jekers";
    }

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    jeker.style.backgroundImage = "url('" + teamIndex[3].v + "')";

    document.querySelector(".c-jekers").appendChild(jeker);
    jeker.style.display = "none";
  }
}
