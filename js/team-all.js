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
    subtext.innerHTML = teamPosition+'<br />'+teamCourse;

    var jeker = document.createElement('div');
    jeker.className = 'allJekers jekers';

    jeker.appendChild(text);
    jeker.appendChild(subtext);

    var teamImage = teamContent.feed.entry[i].gsx$imagem.$t;
    jeker.style.backgroundImage = "url('" + teamImage + "')";

    document.querySelector('.c-jekers').appendChild(jeker);
    jeker.style.display="none";

    if(teamPosition.localeCompare("CTO")==0 || teamPosition.localeCompare("Senior Designer")==0 || teamPosition.localeCompare("Junior Designer")==0 || teamPosition.localeCompare("Senior Developer")==0 || teamPosition.localeCompare("Junior Developer")==0){
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

    if(teamPosition.localeCompare("CEO & CIO")==0 || teamPosition.localeCompare("Senior Innovation Consultant & Communication Manager")==0 || teamPosition.localeCompare("Senior Innovation Consultant")==0 || teamPosition.localeCompare("Junior Innovation Consultant")==0){
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

    if(teamPosition.localeCompare("COO")==0 || teamPosition.localeCompare("Treasurer")==0 || teamPosition.localeCompare("Senior HR Manager")==0 || teamPosition.localeCompare("Junior HR Manager")==0 || teamPosition.localeCompare("Junior QM Manager")==0 || teamPosition.localeCompare("Junior HR & QM Manager")==0){
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