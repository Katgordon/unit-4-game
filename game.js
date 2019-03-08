$(document).ready(function() {


     
    //Variables and set the numbers
    var rubyPoints = 1 + Math.floor(Math.random() * 12);
    var emeraldPoints = 1 + Math.floor(Math.random() * 12);
    var sapphirePoints = 1 + Math.floor(Math.random() * 12);
    var diamondPoints = 1 + Math.floor(Math.random() * 12);
    console.log(rubyPoints)
    console.log(emeraldPoints)
    console.log(sapphirePoints)
    console.log(diamondPoints)
    
    
    //Variables set to zero
    var userPoints = 0;
    var wins = 0;
    var losses = 0;
    var computerScore = 0;
    
    
    
    //paste thibg here //the user points in second line might be wrong add " instead"
    var computerScore = Random=Math.floor(Math.random()*120+19);
    console.log("The number to match is" + computerScore);
    $("#computerScore").html(computerScore);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#alert").empty();
    
    
    //on.click set
    $("#ruby").on("click", function() {
    userTotal = userPoints + rubyPoints;
    console.log(userTotal);
    $("#userTotal").html(userTotal);
    winCheck();
    userPoints = userTotal;
    })
    
    
    $("#emerald").on("click", function() {
    userTotal = userPoints + emeraldPoints;
    console.log(userTotal);
    $("#userTotal").html(userTotal);
    winCheck();
    userPoints = userTotal;
    })
    
    
    $("#sapphire").on("click", function() {
    userTotal = userPoints + sapphirePoints;
    console.log(userTotal);
    $("#userTotal").html(userTotal);
    winCheck();
    userPoints = userTotal;
    })
    
    
    $("#diamond").on("click", function() {
    userTotal = userPoints + diamondPoints;
    console.log(userTotal);
    $("#userTotal").html(userTotal);
    winCheck();
    userPoints = userTotal;
    })
    
    
    
    //If else statement
    var winCheck = function() {
    if (userTotal == computerScore) {
        wins++;
        alert("You win!");
        $("#wins").html(wins);
        function draw () {}
        reset();
    
    } else if (userTotal > computerScore) {
        losses++;
        alert("You lost.");
        $("#losses").html(losses);
        reset();
    
    }
    
    //Reset//
    function reset() { 
    
        rubyPoints = 1 + Math.floor(Math.random() * 12);
        emeraldPoints = 1 + Math.floor(Math.random() * 12);
        sapphirePoints = 1 + Math.floor(Math.random() * 12);
        diamondPoints = 1 + Math.floor(Math.random() * 12);
        computerScore = Random=Math.floor(Math.random()*120+19);
        console.log("The number to match is" + computerScore);
        userTotal=0;
        $("#userTotal").text(userTotal);
        $("#computerScore").text(computerScore);
        userPoints=0;
        console.log(userTotal);
        console.log(rubyPoints);
        console.log(emeraldPoints);
        console.log(sapphirePoints);
        console.log(diamondPoints);
     }
    
    
    
    
     
    }})