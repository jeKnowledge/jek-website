department.style.opacity="0";

setTimeout(function(){
  var jeker=document.querySelectorAll(".allJekers" );
  var logo=document.querySelector(".logo-loader")
  var department=document.querySelector(".departements");

  department.style.display="flex";
  department.style.opacity="1";
  logo.style.display="none";
  logo.style.transition="opacity 5s ease-out";
  logo.style.opacity="0";


  for(var i=0; i<jeker.length; i++) {
    jeker[i].style.display="flex";
  }
}, 2000);
