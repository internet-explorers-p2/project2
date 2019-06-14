$("#form-save-goal-button").on("click", ()=>{
    let goalInfo = {
        UserId : $("#form-save-goal-button").data("userid"), 
        title: $("#goal-name").val()
    }

    $.post("/dashboard", goalInfo, (data) =>{
        
    })
})