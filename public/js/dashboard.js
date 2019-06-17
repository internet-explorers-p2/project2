$("#form-save-goal-button").on("click", ()=>{
    let goalInfo = {
        UserId : $("#form-save-goal-button").data("userid"), 
        title: $("#goal-name").val()
    }

    $.post("/dashboard", goalInfo, (data) =>{
    })
    location.reload()
})

$("#form-save-milestone-button").on("click", ()=>{
    let milestoneInfo = {
        GoalId : $(".milestone-btn").data("goalid"), 
        title: $("#milestone-name").val()
    }

    $.post("/dashboard", milestoneInfo, (data) =>{
    })
    location.reload()
})

