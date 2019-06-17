$("#form-save-goal-button").on("click", ()=>{
    let goalInfo = {
        UserId : $("#form-save-goal-button").data("userid"), 
        title: $("#goal-name").val()
    }

    $.post("/dashboard", goalInfo, (data) =>{
    })
    location.reload()
})

$('.checkbox').on('change', (event) => {
    
    challengeId = event.target.value
    if(event.target.checked) {
        let addedCoin = {
            coin: 'add',
            challengeId,
        }
        $.post("/daily-challenge", addedCoin, function(){
        })
        window.location.reload(true);
     }
     if(!event.target.checked) {
        let removeCoin = {
            coin: 'remove',
            challengeId,
        }
        $.post("/daily-challenge", removeCoin, function(){
        })
        window.location.reload(true);
     }
 })

