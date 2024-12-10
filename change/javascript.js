
const trigger = document.getElementById("trigger");
trigger.addEventListener('click', myfunction);
function myfunction() {
  document.getElementById("trigger").innerHTML = 'hello world right this road';
  //alert("hello bro");
};

/* 

function myFunction() {
  const helloElement = document.getElementById("hello");
  helloElement.textContent = "Text changed!";
}

*/