var homeContent = new XMLHttpRequest();

homeContent.onreadystatechange = function () {
  if (homeContent.readyState == XMLHttpRequest.DONE) {
    if (homeContent.status == 200) {
      homeContentObject();
    } else if (homeContent.status == 400) {
      console.log("There was an error 400");
    } else {
      console.log("something else other than 200 was returned");
    }
  }
};

// console.log("a");

homeContent.open(
  "GET",
  "https://docs.google.com/spreadsheets/d/1D9pjubKA7-gusevG8mtDeErW8GBNFNVN7ZZA4-TGymU/gviz/tq?tqx=out:json",
  true
);
homeContent.send();

function homeContentObject() {
  var originalText = homeContent.responseText;
  let textObject = JSON.parse(originalText.substr(47).slice(0, -2));
  textObject = textObject.table.rows;

  // console.log(textObject);
  // console.log(textObject);

  var defineLang;

  if (getQueryVariable("lang") == "pt") {
    defineLang = 1;

    //Hero
    document.querySelector("#action-text").innerHTML = "Olá!";

    //Contact
    document.querySelector("#contactTitle").innerHTML = "Nós não mordemos!";
    document.querySelector("#contactSubtitle").innerHTML = "Entra em contacto ";
    document.querySelector("#contactSubtitleLink").innerHTML = "aqui.";

    //Videos
    document.querySelector("#videosTitle").innerHTML = "Fazemos vídeos!";
    document.querySelector("#videosSubtitle").innerHTML =
      "E são super fixes...";

    //News
    document.querySelector("#newsTitle").innerHTML = "Gostas do que vês?";
    document.querySelector("#newsSubtitle").innerHTML =
      "Subscreve a nossa newsletter.";
    document.querySelector("#newsButton").innerHTML = "Subscreve";
  }

  if (getQueryVariable("lang") == "en" || getQueryVariable("lang") == "") {
    defineLang = 0;

    //Hero
    document.querySelector("#action-text").innerHTML = "Hello there!";

    //Contact
    document.querySelector("#contactTitle").innerHTML = "We don't bite!";
    document.querySelector("#contactSubtitle").innerHTML = "Get in touch ";
    document.querySelector("#contactSubtitleLink").innerHTML = "here.";

    //Videos
    document.querySelector("#videosTitle").innerHTML = "We make videos!";
    document.querySelector("#videosSubtitle").innerHTML =
      "And they're super cool...";

    //News
    document.querySelector("#newsTitle").innerHTML = "Like what you see?";
    document.querySelector("#newsSubtitle").innerHTML =
      "Subscribe to our newsletter.";
  }

  //jeK Who
  var jekWhoTitle = textObject[defineLang + 1].c[0].v;
  var jekWhoText = textObject[defineLang + 1].c[2].v;

  document.querySelector("#jekWhoTitle").innerHTML = jekWhoTitle;
  document.querySelector("#jekWhoText").innerHTML = jekWhoText;

  //jeKer do mes
  // var jeKerTitle = textObject[defineLang + 3].c[0].v;
  // var jeKerSubtitle = textObject[defineLang + 3].c[1].v;

  // document.querySelector("#jeKerTitle").innerHTML = jeKerTitle;
  // document.querySelector("#jeKerSubtitle").innerHTML = jeKerSubtitle;

  //World
  var jekWorldTitle = textObject[defineLang + 5].c[0].v;
  var jekWorldSubtitle = textObject[defineLang + 5].c[1].v;
  var jekWorldText = textObject[defineLang + 5].c[2].v;

  document.querySelector("#jekWorldTitle").innerHTML = jekWorldTitle;
  document.querySelector("#jekWorldSubtitle").innerHTML = jekWorldSubtitle;
  document.querySelector("#jekWorldText").innerHTML = jekWorldText;

  //Team
  var teamTitle = textObject[defineLang + 7].c[0].v;
  var teamSubtitle = textObject[defineLang + 7].c[1].v;
  var teamText = textObject[defineLang + 7].c[2].v;

  document.querySelector("#teamTitle").innerHTML = teamTitle;
  document.querySelector("#teamSubtitle").innerHTML = teamSubtitle;
  document.querySelector("#teamText").innerHTML = teamText;

  //What we do
  var workTitle = textObject[defineLang + 9].c[0].v;
  var workSubtitle = textObject[defineLang + 9].c[1].v;
  var workText = textObject[defineLang + 9].c[2].v;

  document.querySelector("#workTitle").innerHTML = workTitle;
  document.querySelector("#workSubtitle").innerHTML = workSubtitle;
  document.querySelector("#workText").innerHTML = workText;

  //console.log(jeKerTitle + jeKerSubtitle);
}
