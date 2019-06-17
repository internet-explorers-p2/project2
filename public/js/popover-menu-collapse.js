/* eslint-disable no-undef */
function w3_open() {
  document.getElementById("mySidebar").style.display = "block"
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none"
}
$("#add-goal").on("click", function () {
  event.preventDefault();
  $("#exampleModal").modal({show:true});

var goalName = $("#")
  // $("#exampleModal").on("modal.show", function (event) {
  //     var button = $(event.relatedTarget) // Button that triggered the modal
  //     var recipient = button.data("whatever") // Extract info from data-* attributes
  //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //     var modal = $(this)
  //     modal.find(".modal-title").text("New message to " + recipient)
  //     modal.find(".modal-body input").val(recipient)
  });


// MILESTONE CHECKLIST: 

  function newItem() {
var item = document.getElementById("milestone-input").value;
var ul = document.getElementById("list");
var li = document.createElement("li");

li.setAttribute("id", "myLi");

li.appendChild(document.createTextNode("- " + item));
ul.appendChild(li);
document.getElementById("milestone-input").value = "";
li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
if (e.keyCode == 13) {
  newItem();
}
};

function removeItem(e) {
e.target.parentElement.removeChild(e.target);
}
 
  