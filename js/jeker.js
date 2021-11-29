var jekerContent = new XMLHttpRequest();

jekerContent.onreadystatechange = function () {
  if (jekerContent.readyState == XMLHttpRequest.DONE) {
    if (jekerContent.status == 200) {
      jekerObject();
    } else if (jekerContent.status == 400) {
      console.log("There was an error 400");
    } else {
      console.log("something else other than 200 was returned");
    }
  }
};

jekerContent.open(
  "GET",
  "https://spreadsheets.google.com/spreadsheets/d/1zn-f8tSEqhz_UwKVGfYNwIs4J4kndemIU8PZpfrZwKk/gviz/tq?tqx=out:json",
  true
);
jekerContent.send();

function jekerObject() {
  var originalText = jekerContent.responseText;
  let textObject = JSON.parse(originalText.substr(47).slice(0, -2));
  textObject = textObject.table.rows[1].c;
  // console.log(textObject);

  var defineLang;

  if (getQueryVariable("lang") == "pt") {
    defineLang = 1;
  }
  if (getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    defineLang = 0;
  }

  //jeK Who
  console.log(textObject);
  var jekerName = textObject[0].v;
  var jekerImage = textObject[1].v;
  var jekerDesc = textObject[2].v;

  document.querySelector("#jekerName").innerHTML = jekerName;
  document.querySelector("#jekerDesc").innerHTML = jekerDesc;
  document.querySelector(".jeker-image").style.backgroundImage =
    "url('" + jekerImage + "')";

  //console.log(jekerName + jekerDesc);
}
