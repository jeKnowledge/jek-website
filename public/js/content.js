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
}
