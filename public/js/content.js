var xmlhttp = new XMLHttpRequest();

let urlParams = (new URL(document.location)).searchParams;
let id = urlParams.get("id");

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == XMLHttpRequest.DONE) {
    if (xmlhttp.status == 200) {
      createObject();
    }
    else if (xmlhttp.status == 400) {
      console.log('There was an error 400');
    }
    else {
      console.log('something else other than 200 was returned');
    }
  }
};

xmlhttp.open("GET", 'https://spreadsheets.google.com/feeds/list/1D9pjubKA7-gusevG8mtDeErW8GBNFNVN7ZZA4-TGymU/od6/public/values?alt=json', true);
xmlhttp.send();

function createObject() {
  originalText = xmlhttp.responseText;
  var textObject = JSON.parse(originalText);
  console.log(textObject);

  if(getQueryVariable("lang") == "pt") {
    console.log("PT");

    //jeK Who
    var jekWhoTitle = textObject.feed.entry[1].gsx$titles.$t;
    var jekWhoTtext = textObject.feed.entry[1].gsx$text.$t;

    //jeKer
    var jeKerTitle = textObject.feed.entry[3].gsx$titles.$t;
    var jeKerSubtitle = textObject.feed.entry[3].gsx$subtitles.$t;
    console.log(jeKerTitle + jeKerSubtitle);
  }
  if(getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    console.log("EN");

    //jeK Who
    var jekWhoTitle = textObject.feed.entry[0].gsx$titles.$t;
    var jekWhoTtext = textObject.feed.entry[0].gsx$text.$t;

    //jeKer
    var jeKerTitle = textObject.feed.entry[2].gsx$titles.$t;
    var jeKerSubtitle = textObject.feed.entry[2].gsx$subtitles.$t;
    console.log(jeKerTitle + jeKerSubtitle);
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
  var pair = vars[i].split("=");
    if(pair[0] == variable) {
      return pair[1];
    }
  }
  return(false);
}
