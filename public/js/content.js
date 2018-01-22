var homeContent = new XMLHttpRequest();

homeContent.onreadystatechange = function() {
  if (homeContent.readyState == XMLHttpRequest.DONE) {
    if (homeContent.status == 200) {
      homeContentObject();
    }
    else if (homeContent.status == 400) {
      console.log('There was an error 400');
    }
    else {
      console.log('something else other than 200 was returned');
    }
  }
};

homeContent.open("GET", 'https://spreadsheets.google.com/feeds/list/1D9pjubKA7-gusevG8mtDeErW8GBNFNVN7ZZA4-TGymU/od6/public/values?alt=json', true);
homeContent.send();

function homeContentObject() {
  var originalText = homeContent.responseText;
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
  var jekWhoTitle = textObject.feed.entry[defineLang + 0].gsx$titles.$t;
  var jekWhoTtext = textObject.feed.entry[defineLang + 0].gsx$text.$t;

  //jeKer
  var jeKerTitle = textObject.feed.entry[defineLang + 2].gsx$titles.$t;
  var jeKerSubtitle = textObject.feed.entry[defineLang + 2].gsx$subtitles.$t;

  //console.log(jeKerTitle + jeKerSubtitle);
}
