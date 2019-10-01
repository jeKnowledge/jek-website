var countDownDate = new Date("Oct 2, 2019 23:59:00").getTime();
var countDownfunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  if (countDownDate<now){
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  }
  else{
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  if(distance < 0) {
    clearInterval(countDownfunction);
    document.getElementById()("demo").innerHTML = "Happy days";
  }

},1000);
