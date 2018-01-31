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

    //Hero
    document.querySelector("#action-text").innerHTML = "Olá!";

    //Contact
    document.querySelector("#contactTitle").innerHTML = "Nós não mordemos!";
    document.querySelector("#contactSubtitle").innerHTML = "Entra em contacto ";
    document.querySelector("#contactSubtitleLink").innerHTML = "aqui.";

    //Videos
    document.querySelector("#videosTitle").innerHTML = "Fazemos vídeos!";
    document.querySelector("#videosSubtitle").innerHTML = "E são super fixes...";

    //News
    document.querySelector("#newsTitle").innerHTML = "Gostas do que vês?";
    document.querySelector("#newsSubtitle").innerHTML = "Subscreve a nossa newsletter.";
    document.querySelector("#newsButton").innerHTML = "Subscreve";
  }

  if(getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    defineLang = 0;

    //Hero
    document.querySelector("#action-text").innerHTML = "Hello there!";

    //Contact
    document.querySelector("#contactTitle").innerHTML = "We don't bite!";
    document.querySelector("#contactSubtitle").innerHTML = "Get in touch ";
    document.querySelector("#contactSubtitleLink").innerHTML = "here.";

    //Videos
    document.querySelector("#videosTitle").innerHTML = "We make videos!";
    document.querySelector("#videosSubtitle").innerHTML = "And they're super cool...";

    //News
    document.querySelector("#newsTitle").innerHTML = "Like what you see?";
    document.querySelector("#newsSubtitle").innerHTML = "Subscribe to our newsletter.";
    document.querySelector("#newsButton").innerHTML = "Subscribe";
  }

  //jeK Who
  var jekWhoTitle = textObject.feed.entry[defineLang + 0].gsx$titles.$t;
  var jekWhoText = textObject.feed.entry[defineLang + 0].gsx$text.$t;

  document.querySelector("#jekWhoTitle").innerHTML = jekWhoTitle;
  document.querySelector("#jekWhoText").innerHTML = jekWhoText;

  //jeKer
  var jeKerTitle = textObject.feed.entry[defineLang + 2].gsx$titles.$t;
  var jeKerSubtitle = textObject.feed.entry[defineLang + 2].gsx$subtitles.$t;

  document.querySelector("#jeKerTitle").innerHTML = jeKerTitle;
  document.querySelector("#jeKerSubtitle").innerHTML = jeKerSubtitle;

  //Team
  var teamTitle = textObject.feed.entry[defineLang + 6].gsx$titles.$t;
  var teamSubtitle = textObject.feed.entry[defineLang + 6].gsx$subtitles.$t;
  var teamText = textObject.feed.entry[defineLang + 6].gsx$text.$t;

  document.querySelector("#teamTitle").innerHTML = teamTitle;
  document.querySelector("#teamSubtitle").innerHTML = teamSubtitle;
  document.querySelector("#teamText").innerHTML = teamText;

  //World
  var jekWorldTitle = textObject.feed.entry[defineLang + 4].gsx$titles.$t;
  var jekWorldSubtitle = textObject.feed.entry[defineLang + 4].gsx$subtitles.$t;
  var jekWorldText = textObject.feed.entry[defineLang + 4].gsx$text.$t;

  document.querySelector("#jekWorldTitle").innerHTML = jekWorldTitle;
  document.querySelector("#jekWorldSubtitle").innerHTML = jekWorldSubtitle;
  document.querySelector("#jekWorldText").innerHTML = jekWorldText;

  //console.log(jeKerTitle + jeKerSubtitle);
}
