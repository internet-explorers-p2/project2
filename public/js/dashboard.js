//This file is to make the ajax calls for the partial goal-accordion.handlebars and connect the apiRoutes.js

//This file is to make the ajax calls for the partial goal-accordion.handlebars and connect the apiRoutes.js
console.log("dashboard.js is loading")
var newGoal
//first call: submit button from goal modal to post on the database - POST
$("#form-save-goal-button").on("click", function(event){
console.log("on click is working")
    var titleInput = $("#goal-name").val().trim()
    console.log("this is var titleInput:" + titleInput)

    var deadline = $("#deadline-goal").val()
    console.log("Has deadline? " + deadline)

    var endDateInput = $("#end-date").val()
    console.log("endDate: " + endDateInput)

    var newGoal = {
        title: titleInput,
        deadline: deadline,
        endDate: endDateInput
    }

    console.log(newGoal)

})

$.ajax("/api/goals/", {
    type: "POST",
    data: newGoal
}).then(
    function () {
        console.log("Added new goal")
    }
)