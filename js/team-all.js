function teamAll() {
  teamContent = window.teamContent;

  var allJekers= 42;
  var innovationJekers= 15;
  var techJekers= 22;
  var internJekers= 5;

  for(var i=0; i<allJekers; i++) {
    var text = document.createElement('div');
    text.className = 'jekerTextALL';

    var text = document.createElement('div');
    text.className = "s-title title is-3 jekerTextALL jekerText";
    text.innerHTML = teamContent.feed.entry[i].gsx$nome_4.$t;

    subtext = document.createElement('div');
    subtext.className = "s-text subtitle is-3 jekerTextALL jekerText";
    var teamPosition = teamContent.feed.entry[i].gsx$cargo_4.$t;
    var teamCourse = teamContent.feed.entry[i].gsx$curso_4.$t;
    subtext.innerHTML = teamPosition+'<br />'+teamCourse;

    var jeker = document.createElement('div');
    jeker.className = 'allJekers jekers';

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    var teamImage = teamContent.feed.entry[i].gsx$imagem_4.$t;
    jeker.style.backgroundImage = "url(../../images/team/" + teamImage + ".jpg)";

    document.querySelector('.c-jekers').appendChild(jeker);
    jeker.style.display="none";
  }

  for(var i=0; i<innovationJekers; i++) {
    var text = document.createElement('div');
    text.className = 'jekerTextINNOVATION';

    var text = document.createElement('div');
    text.className = "s-title title is-3 jekerTextINNOVATION jekerText";
    text.innerHTML = teamContent.feed.entry[i].gsx$nome.$t;

    subtext = document.createElement('div');
    subtext.className = "s-text subtitle is-3 jekerTextINNOVATION jekerText";
    var teamPosition = teamContent.feed.entry[i].gsx$cargo.$t;
    var teamCourse = teamContent.feed.entry[i].gsx$curso.$t;
    subtext.innerHTML = teamPosition+'<br />'+teamCourse;

    var jeker = document.createElement('div');
    jeker.className = 'innovationJekers jekers';

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    var teamImage = teamContent.feed.entry[i].gsx$imagem.$t;
    jeker.style.backgroundImage = "url(../../images/team/" + teamImage + ".jpg)";

    document.querySelector('.c-jekers').appendChild(jeker);
    jeker.style.display="none";
  }

  for(var i=0; i<techJekers; i++) {
    var text = document.createElement('div');
    text.className = 'jekerTextTECH';

    var text = document.createElement('div');
    text.className = "s-title title is-3 jekerTextTECH jekerText";
    text.innerHTML = teamContent.feed.entry[i].gsx$nome_2.$t;

    subtext = document.createElement('div');
    subtext.className = "s-text subtitle is-3 jekerTextTECH jekerText";
    var teamPosition = teamContent.feed.entry[i].gsx$cargo_2.$t;
    var teamCourse = teamContent.feed.entry[i].gsx$curso_2.$t;
    subtext.innerHTML = teamPosition+'<br />'+teamCourse;

    var jeker = document.createElement('div');
    jeker.className = 'techJekers jekers';

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    var teamImage = teamContent.feed.entry[i].gsx$imagem_2.$t;
    jeker.style.backgroundImage = "url(../../images/team/" + teamImage + ".jpg)";

    document.querySelector('.c-jekers').appendChild(jeker);
    jeker.style.display="none";
  }

  for(var i=0; i<internJekers; i++) {
    var text = document.createElement('div');
    text.className = 'jekerTextINTERN';

    var text = document.createElement('div');
    text.className = "s-title title is-3 jekerTextINTERN jekerText";
    text.innerHTML = teamContent.feed.entry[i].gsx$nome_3.$t;

    subtext = document.createElement('div');
    subtext.className = "s-text subtitle is-3 jekerTextINTERN jekerText";
    var teamPosition = teamContent.feed.entry[i].gsx$cargo_3.$t;
    var teamCourse = teamContent.feed.entry[i].gsx$curso_3.$t;
    subtext.innerHTML = teamPosition+'<br />'+teamCourse;

    var jeker = document.createElement('div');
    jeker.className = 'internJekers jekers';

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    var teamImage = teamContent.feed.entry[i].gsx$imagem_3.$t;
    jeker.style.backgroundImage = "url(../../images/team/" + teamImage + ".jpg)";

    document.querySelector('.c-jekers').appendChild(jeker);
    jeker.style.display="none";
  }
}
