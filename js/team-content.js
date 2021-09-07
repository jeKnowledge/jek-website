var teamContent = new XMLHttpRequest();

teamContent.onreadystatechange = function () {
  if (teamContent.readyState == XMLHttpRequest.DONE) {
    if (teamContent.status == 200) {
      teamObject();
      if (location.pathname == "/views/team/") {
        teamAll();
      }
    } else if (teamContent.status == 400) {
      console.log("There was an error 400");
    } else {
      console.log("something else other than 200 was returned");
    }
  }
};

teamContent.open(
  "GET",
  "https://spreadsheets.google.com/spreadsheets/d/1uZymfau4VeVE0UeHeEYF73EUlPGOJx_Z-sOFnKaxvwU/gviz/tq?tqx=out:json",
  true
);
teamContent.send();

function teamObject() {
  var originalText = teamContent.responseText;
  var textObject = JSON.parse(originalText.substr(47).slice(0, -2));
  window.teamContent = textObject.table.rows;
}
