var allJekerContainer = document.querySelectorAll(".jeker")
var allJekers = document.getElementById('all');
var innovationDepartment = document.getElementById('innovation');
var technologyDepartment = document.getElementById('technology');
var internDepartment = document.getElementById('intern');
var department=document.querySelector(".departements");

department.style.display="none";

allJekers.style.color="#7CCCED";
innovationDepartment.style.color="#000000";
technologyDepartment.style.color="#000000";
internDepartment.style.color="#000000";

allJekers.addEventListener('click', function() {
  allJekers.style.color="#7CCCED";
  innovationDepartment.style.color="#000000";
  technologyDepartment.style.color="#000000";
  internDepartment.style.color="#000000";

  var jeker=document.querySelectorAll(".allJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="flex";
  }

  var jeker=document.querySelectorAll(".techJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".innovationJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".internJekers");
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }
});

innovationDepartment.addEventListener('click', function() {
  allJekers.style.color="#000000";
  innovationDepartment.style.color="#E3713B";
  technologyDepartment.style.color="#000000";
  internDepartment.style.color="#000000";

  var jeker=document.querySelectorAll(".allJekers" );
  console.log(jeker)
  for(var i=0; i<jeker.length; i++) {
    console.log(jeker[i])
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".techJekers" );
  console.log(jeker)
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".innovationJekers" );
  console.log(jeker)
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="flex";
  }

  var jeker=document.querySelectorAll(".internJekers");
  console.log(jeker)
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

});

technologyDepartment.addEventListener('click', function() {
  allJekers.style.color="#000000";
  innovationDepartment.style.color="#000000";
  technologyDepartment.style.color="#51A450";
  internDepartment.style.color="#000000";

  var jeker=document.querySelectorAll(".allJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".techJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="flex";
  }

  var jeker=document.querySelectorAll(".innovationJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".internJekers");
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }
});

internDepartment.addEventListener('click', function() {
  allJekers.style.color="#000000";
  innovationDepartment.style.color="#000000";
  technologyDepartment.style.color="#000000";
  internDepartment.style.color="#AB334A";

  var jeker=document.querySelectorAll(".allJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".techJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".innovationJekers" );
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="none";
  }

  var jeker=document.querySelectorAll(".internJekers");
  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="flex";
  }
});