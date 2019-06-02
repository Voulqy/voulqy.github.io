// function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  // var i, tabcontent, tablinks;
  // tabcontent = document.getElementsByClassName("tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
  // }

  // Remove the background color of all tablinks/buttons
  // tablinks = document.getElementsByClassName("tablink");
  // for (i = 0; i < tablinks.length; i++) {
    // tablinks[i].style.backgroundColor = "";
  // }

  // Show the specific tab content
  // document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  // elmnt.style.backgroundColor = color;
// }

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
