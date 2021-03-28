var teamContent = new XMLHttpRequest();

teamContent.onreadystatechange = function() {
  if (teamContent.readyState == XMLHttpRequest.DONE) {
    if (teamContent.status == 200) {
        teamObject();
      if(location.pathname == "/views/team/"){
        teamAll()
      }
    }
    else if (teamContent.status == 400) {
      console.log('There was an error 400');
    }
    else {
      console.log('something else other than 200 was returned');
    }
  }
};

teamContent.open("GET", 'https://spreadsheets.google.com/feeds/list/1uZymfau4VeVE0UeHeEYF73EUlPGOJx_Z-sOFnKaxvwU/od6/public/values?alt=json', true);
teamContent.send();

function teamObject() {
  var originalText = teamContent.responseText;
  var textObject = JSON.parse(originalText);
  window.teamContent = textObject;
}
