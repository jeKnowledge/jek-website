var name = "";
var email = "";
var project = "";
var when = "";

document.querySelector('#hello-button-1').addEventListener("click", function(){
  if(document.querySelector('#hello-name').value !== "") {
    name = document.querySelector('#hello-name').value;
    email = document.querySelector('#hello-email').value;
  }
  document.querySelector('#hello-1').classList.toggle("active");
  document.querySelector('#hello-2').classList.toggle("active");
  var firstName = name.split(" ");
  if(name !== "") {
    document.querySelector('#user-name').innerHTML = firstName[0] + "...";
  }
});

document.querySelector('#hello-button-2').addEventListener("click", function(){
  var radio = document.querySelectorAll('input[type="radio"]');
  for (var i = 0, length = radio.length; i < length; i++) {
    if (radio[i].checked) {
      project = radio[i].value;
      break;
    }
  }
  console.log(project)
  document.querySelector('#hello-2').classList.toggle("active");
  document.querySelector('#hello-3').classList.toggle("active");
});

document.querySelector('#hello-button-3').addEventListener("click", function(){
  if(document.querySelector('#hello-name').value !== "") {

  }
  document.querySelector('#hello-3').classList.toggle("active");
  document.querySelector('#hello-4').classList.toggle("active");
});
