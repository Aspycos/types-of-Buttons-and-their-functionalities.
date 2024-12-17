

function handleButtonClick() {
   const isYes =  (confirm  ("Are you sure you want to proceed?") ) ; 
  
    if (isYes) {
      window.location.href = "https://www.google.com"; // Replace with the actual URL
    } else {
        
      window.location.href = "error-page.html"; // Replace with the actual URL
    }  
  } 
  
  // Assuming you have a button with an id of "myButton"
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleButtonClick);
  