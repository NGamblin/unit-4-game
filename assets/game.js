var crystal1Value;
var crystal2Value;
var crystal3Value;
var crystal4Value;
var goalNumb;
var scoreNumb = 0;
var Wins = 0;
var losses = 0;


function beginReset() {
    var min=19;
    var max=120;
    goalNumb = Math.floor(Math.random() * (+max - +min) + +min);
    crystal1Val = Math.floor(Math.random() * 13) +1;
    crystal2Val = Math.floor(Math.random() * 13) +1;
    crystal3Val = Math.floor(Math.random() * 13) +1;
    crystal4Val = Math.floor(Math.random() * 13) +1;
    $("#displayGoal").text(goalNumb);
    $("#displayScore").text(scoreNumb);
    $("#displayWins").text();
    $("#displayLosses").text();
    console.log(goalNumb);
    console.log(crystal1Val);
}

//=============================================================================


$("#crystal1").on("click", function() {
    
    console.log("clicked1");
    scoreNumb = scoreNumb + crystal1Val;
    console.log(crystal1Val)
    $("#displayScore").text(scoreNumb);

  });

  $("#crystal2").on("click", function() {
    console.log("clicked2");
    scoreNumb = scoreNumb + crystal2Val;
    console.log(crystal2Val)
    $("#displayScore").text(scoreNumb)

  });

  $("#crystal3").on("click", function() {
    console.log("clicked3");
    scoreNumb = scoreNumb + crystal3Val;
    console.log(crystal3Val)
    $("#displayScore").text(scoreNumb)

  });

  $("#crystal4").on("click", function() {
    console.log("clicked4");
    console.log(crystal4Val)
    scoreNumb = scoreNumb + crystal4Val;
    $("#displayScore").text(scoreNumb)

  });

  beginReset();