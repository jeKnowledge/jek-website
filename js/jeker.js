var jekerContent = new XMLHttpRequest();

jekerContent.onreadystatechange = function() {
  if (jekerContent.readyState == XMLHttpRequest.DONE) {
    if (jekerContent.status == 200) {
      jekerObject();
    }
    else if (jekerContent.status == 400) {
      console.log('There was an error 400');
    }
    else {
      console.log('something else other than 200 was returned');
    }
  }
};

jekerContent.open("GET", 'https://spreadsheets.google.com/feeds/list/1zn-f8tSEqhz_UwKVGfYNwIs4J4kndemIU8PZpfrZwKk/od6/public/values?alt=json', true);
jekerContent.send();

function jekerObject() {
  var originalText = jekerContent.responseText;
  var textObject = JSON.parse(originalText);
  //console.log(textObject);

  var defineLang;

  if(getQueryVariable("lang") == "pt") {
    defineLang = 1;
  }
  if(getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    defineLang = 0;
  }

  //jeK Who
  var jekerName = textObject.feed.entry[0].gsx$name.$t;
  var jekerDesc = textObject.feed.entry[defineLang + 0].gsx$description.$t;
  var jekerImage = textObject.feed.entry[0].gsx$imageurl.$t;

  document.querySelector("#jekerName").innerHTML = jekerName;
  document.querySelector("#jekerDesc").innerHTML = jekerDesc;
  document.querySelector(".jeker-image").style.backgroundImage = "url('" + jekerImage + "')";

  //console.log(jekerName + jekerDesc);
}
