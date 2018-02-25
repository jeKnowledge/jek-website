var partners = [
  "accenture",
  "betai",
  "bloco",
  "boldint",
  "caixageral",
  "critical",
  "deemaze",
  "deloitte",
  "digitalocean",
  "edp",
  "esabic",
  "faber",
  "farfetch",
  "fctuc",
  "feedzai",
  "github",
  "ipn",
  "itgrow",
  "landingjobs",
  "licorbeirao",
  "lifeonmars",
  "microsoft",
  "novabase",
  "redbull",
  "redlight",
  "reidosfrangos",
  "rightit",
  "startuplisboa",
  "subvisual",
  "unbabel",
  "whitesmith",
  "wit"
];

var partnerContainer = document.querySelectorAll(".partner")

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

shuffle(partners)

for(var i=0; i<partnerContainer.length; i++) {
  document.querySelector(".partner" + i).style.backgroundImage = "url(../images/partners/" + partners[i] + ".png)";
}
