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

if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
  document.querySelector('.c-hero-ov-3').classList.add("safari");
  document.querySelector('.c-hero-ov-action').classList.add("safari");
}
