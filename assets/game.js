var crystal1Value;
var crystal2Value;
var crystal3Value;
var crystal4Value;
var goalNumb;
var scoreNumb = 0;
var wins = 0;
var losses = 0;


//============Core

function start() {
    var min=19;
    var max=120;
    goalNumb = Math.floor(Math.random() * (+max - +min) + +min);
    crystal1Val = Math.floor(Math.random() * 12) +1;
    crystal2Val = Math.floor(Math.random() * 12) +1;
    crystal3Val = Math.floor(Math.random() * 12) +1;
    crystal4Val = Math.floor(Math.random() * 12) +1;
    $("#displayGoal").text(goalNumb);
    $("#displayScore").text(scoreNumb);
    $("#displayWins").text(wins);
    $("#displayLosses").text(losses);
    // console.log(goalNumb);
    // console.log(crystal1Val);
    // console.log(crystal1Val, crystal2Val, crystal3Val, crystal4Val)
}

function reset() {
  var min=19;
  var max=120;
  goalNumb = Math.floor(Math.random() * (+max - +min) + +min);
  scoreNumb = 0;
  crystal1Val = Math.floor(Math.random() * 12) +1;
  crystal2Val = Math.floor(Math.random() * 12) +1;
  crystal3Val = Math.floor(Math.random() * 12) +1;
  crystal4Val = Math.floor(Math.random() * 12) +1;
  $("#displayGoal").text(goalNumb);
  $("#displayScore").text(scoreNumb);
  $("#displayWins").text(wins);
  $("#displayLosses").text(losses);
  // console.log(goalNumb);
  // console.log(crystal1Val);
}

function evalWin() {
  // debugger;
  if (scoreNumb === goalNumb) {
    wins++;
    $("#displayWins").text(wins);
    reset()
 } else if (scoreNumb > goalNumb) {
   losses++;
   $("#displayLosses").text(losses);
   reset();
  }
}


//==============On Click events for Cystal images


$("#crystal1").on("click", function() {
  $("#crystal1").animate({height: "210px", width: "260px"}).animate({height: "200px", width: "250px"});
  // console.log("clicked1");
    scoreNumb = scoreNumb + crystal1Val;
    // console.log(crystal1Val)
    $("#displayScore").text(scoreNumb);
    evalWin();

  });

  $("#crystal2").on("click", function() {
    $("#crystal2").animate({height: "210px", width: "260px"}).animate({height: "200px", width: "250px"});
    // console.log("clicked2");
    scoreNumb = scoreNumb + crystal2Val;
    // console.log(crystal2Val)
    $("#displayScore").text(scoreNumb)
    evalWin();
  });

  $("#crystal3").on("click", function() {
    $("#crystal3").animate({height: "210px", width: "260px"}).animate({height: "200px", width: "250px"});
    // console.log("clicked3");
    scoreNumb = scoreNumb + crystal3Val;
    // console.log(crystal3Val)
    $("#displayScore").text(scoreNumb)
    evalWin();
  });

  $("#crystal4").on("click", function() {
    $("#crystal4").animate({height: "210px", width: "260px"}).animate({height: "200px", width: "250px"});
    // console.log("clicked4");
    // console.log(crystal4Val)
    scoreNumb = scoreNumb + crystal4Val;
    $("#displayScore").text(scoreNumb)
    
  });

//======== On window load


  start();