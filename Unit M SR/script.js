/* 
   Big J's Deep Dish Pizza 
   Filename: script.js

   Author:  Darryl Aho 
   Date: 04/03/21    
   HTML5 and CSS3 Illustrated Unit M, Skills Review
 */

/* create variables */

var nameContent = document.querySelector(".request-from");
var feedbackContent = document.querySelector(".request-content");
var nameInput = document.querySelector("#nameinput");
var feedbackInput = document.querySelector("#other-info");
var form = document.querySelector(".catering-form");
var cateringPreview = document.querySelector(".catering-preview");
var submitButton = document.querySelector(".submitbutton");


/* add from text to preview section */

function updatePreview() {

    nameContent.textContent = nameInput.value;
    feedbackContent.textContent = feedbackInput.value;
    cateringPreview.className = "catering-preview show";

    if (form.checkValidity() === true) {
        submitButton.className = "submitbutton show";
    }
}
/*
updatePreview();
*/

/*create evet listener for changes to form */

form.addEventListener("change", updatePreview, false);