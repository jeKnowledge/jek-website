function teamAll() {
  teamContent = window.teamContent;

  var allJekers = teamContent.feed.entry.length;

  for(var i=0; i<allJekers; i++) {
    var text = document.createElement('div');
    text.className = 'jekerTextALL';

    var text = document.createElement('div');
    text.className = "s-title title is-3 jekerTextALL jekerText";
    text.innerHTML = teamContent.feed.entry[i].gsx$nome.$t;

    subtext = document.createElement('div');
    subtext.className = "s-text subtitle is-3 jekerTextALL jekerText";
    var teamPosition = teamContent.feed.entry[i].gsx$cargo.$t;
    var teamCourse = teamContent.feed.entry[i].gsx$curso.$t;
    var teamDep = teamContent.feed.entry[i].gsx$department.$t;
    subtext.innerHTML = teamPosition+'<br />'+teamCourse;

    var jeker = document.createElement('div');
    jeker.className = 'allJekers jekers';

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    var teamImage = teamContent.feed.entry[i].gsx$imagem.$t;
    jeker.style.backgroundImage = "url('" + teamImage + "')";

    document.querySelector('.c-jekers').appendChild(jeker);
    jeker.style.display="none";

    if(teamDep.localeCompare("Direcao")==0){
      var text = document.createElement('div');
      text.className = 'jekerTextALL';

      var text = document.createElement('div');
      text.className = "s-title title is-3 jekerTextALL jekerText";
      text.innerHTML = teamContent.feed.entry[i].gsx$nome.$t;

      subtext = document.createElement('div');
      subtext.className = "s-text subtitle is-3 jekerTextALL jekerText";
      subtext.innerHTML = teamPosition+'<br />'+teamCourse;

      var jeker = document.createElement('div');
      jeker.className = 'dirJekers jekers';

      jeker.appendChild(text);
      jeker.appendChild(subtext);

      jeker.style.backgroundImage = "url('" + teamImage + "')";

      document.querySelector('.c-jekers').appendChild(jeker);
      jeker.style.display="none";
    }

    if(teamDep.localeCompare("Tech")==0){
      var text = document.createElement('div');
      text.className = 'jekerTextTECH';

      var text = document.createElement('div');
      text.className = "s-title title is-3 jekerTextTECH jekerText";
      text.innerHTML = teamContent.feed.entry[i].gsx$nome.$t;

      subtext = document.createElement('div');
      subtext.className = "s-text subtitle is-3 jekerTextTECH jekerText";
      subtext.innerHTML = teamPosition+'<br />'+teamCourse;

      var jeker = document.createElement('div');
      jeker.className = 'techJekers jekers';

      jeker.appendChild(text);
      jeker.appendChild(subtext);

      jeker.style.backgroundImage = "url('" + teamImage + "')";

      document.querySelector('.c-jekers').appendChild(jeker);
      jeker.style.display="none";
    }

    if(teamDep.localeCompare("Inovacao")==0){
      var text = document.createElement('div');
      text.className = 'jekerTextINNOVATION';

      var text = document.createElement('div');
      text.className = "s-title title is-3 jekerTextINNOVATION jekerText";
      text.innerHTML = teamContent.feed.entry[i].gsx$nome.$t;

      subtext = document.createElement('div');
      subtext.className = "s-text subtitle is-3 jekerTextINNOVATION jekerText";
      subtext.innerHTML = teamPosition+'<br />'+teamCourse;

      var jeker = document.createElement('div');
      jeker.className = 'innovationJekers jekers';

      jeker.appendChild(text);
      jeker.appendChild(subtext);

      jeker.style.backgroundImage = "url('" + teamImage + "')";

      document.querySelector('.c-jekers').appendChild(jeker);
      jeker.style.display="none";
    }

    if(teamDep.localeCompare("Interno")==0){
      var text = document.createElement('div');
      text.className = 'jekerTextINTERN';

      var text = document.createElement('div');
      text.className = "s-title title is-3 jekerTextINTERN jekerText";
      text.innerHTML = teamContent.feed.entry[i].gsx$nome.$t;

      subtext = document.createElement('div');
      subtext.className = "s-text subtitle is-3 jekerTextINTERN jekerText";
      subtext.innerHTML = teamPosition+'<br />'+teamCourse;

      var jeker = document.createElement('div');
      jeker.className = 'internJekers jekers';

      jeker.appendChild(text);
      jeker.appendChild(subtext);

      jeker.style.backgroundImage = "url('" + teamImage + "')";

      document.querySelector('.c-jekers').appendChild(jeker);
      jeker.style.display="none";
    }
  }
}