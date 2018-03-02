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

var options = document.querySelectorAll('.option');

options[0].addEventListener("click", function() {
  project = "Tech, Web & Apps";
  options[0].classList.add("active");
  options[1].classList.remove("active");
  options[2].classList.remove("active");
  options[3].classList.remove("active");
});
options[1].addEventListener("click", function() {
  project = "Design or Branding";
  options[1].classList.add("active");
  options[0].classList.remove("active");
  options[2].classList.remove("active");
  options[3].classList.remove("active");
});
options[2].addEventListener("click", function() {
  project = "Marketing or Events";
  options[2].classList.add("active");
  options[0].classList.remove("active");
  options[1].classList.remove("active");
  options[3].classList.remove("active");
});
options[3].addEventListener("click", function() {
  project = "Something else...";
  options[3].classList.add("active");
  options[1].classList.remove("active");
  options[2].classList.remove("active");
  options[0].classList.remove("active");
});

document.querySelector('#hello-button-2').addEventListener("click", function(){
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
