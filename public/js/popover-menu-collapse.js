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
    })

    $(function() {
        $( "#progressbar" ).progressbar({
          value: 0
        })
        .data("value","0");
        
        $("#plus").click(function() {
            var currValue = $( "#progressbar" ).data("value");
            currValue = parseInt(currValue) ? parseInt(currValue) : 0;
            if(currValue <= 100) {
                $( "#progressbar" ).progressbar({
                  value: currValue+10
                }).data("value",currValue+10);
                $("#progressLabel").html((currValue+10)+"%");
            }    
        });
        
        $("#minus").click(function() {
            var currValue = $( "#progressbar" ).data("value");
            currValue = parseInt(currValue) ? parseInt(currValue) : 0;
            if(currValue > 0) {
                $( "#progressbar" ).progressbar({
                  value: currValue-10
                }).data("value",currValue-10);
                $("#progressLabel").html((currValue-10)+"%");
            }    
        });
        
      });