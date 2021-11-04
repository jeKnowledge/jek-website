var portfolioContent = new XMLHttpRequest();

portfolioContent.onreadystatechange = function () {
  if (portfolioContent.readyState == XMLHttpRequest.DONE) {
    if (portfolioContent.status == 200) {
      portfolioObject();
      if (location.pathname == "/") {
        sliderContentLoader();
      } else if (location.pathname == "/views/portfolio/") {
        portfolioAll();
      } else {
        projectContentLoader();
      }
    } else if (portfolioContent.status == 400) {
      console.log("There was an error 400");
    } else {
      console.log("something else other than 200 was returned");
    }
  }
};

portfolioContent.open(
  "GET",
  "https://spreadsheets.google.com/spreadsheets/d/1-XBqjQQA9-9Qlzlchhebl1Gt5IyImdE_23ryA5t_8GE/gviz/tq?tqx=out:json",
  true
);
portfolioContent.send();

function portfolioObject() {
  var originalText = portfolioContent.responseText;
  var textObject = JSON.parse(originalText.substr(47).slice(0, -2));
  window.portfolioContent = textObject.table.rows;
  // console.log(textObject.table.rows);
}
