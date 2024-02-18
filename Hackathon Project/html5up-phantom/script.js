// Get the modal

var modal2 = document.getElementById("myModal2");
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnTwo = document.getElementById("myButton2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }



// When the user clicks the button, open the modal 
btnTwo.onclick = function() {
    modal2.style.display = "block";
  modal.style.display = "block";
}


  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none";
  }

  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal || event.target == modal2) {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
  }
