/*
Specifications:
1. put user's input into an array
2. for loop to see if the array contains any "1" or "0"
3. if the array contains a "1", to return "Boop!", and if array contains "2", to return "Beep!"
4. if the array contains a "3", to return "I'm sorry, Dave. I'm afraid I can't do that."

*/

var checkMod = function(numInput) {
  var modCheck = false;
    if(parseInt(numInput) % 3 === 0) {
      modCheck = true;
    }
  return modCheck;
};

$(document).ready(function() {
  $("form#boopForm").submit(function(event){

    var nameInput = $("#name").val();
    var numInput = $("#num").val();
    var numArray = Array.from(numInput);
    var divisible = checkMod(numInput);

    var toOutput = function() {
      var outputArray = [];
      for(var i = 0; i < numArray.length; i++) {
        if (numArray[i] === "1") {
          outputArray.push("Boop!");
        } else if (numArray[i] === "0") {
          outputArray.push("Beep!");
        } else {
          outputArray.push(numArray[i]);
        }
      }
      return outputArray;
    }

    if (divisible === true && nameInput === "") {
      $("#beepBoopResult").text("Oops, you forgot to enter your name.");
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();
    } else if (divisible === true && nameInput !== "") {
      $("#beepBoopResult").text("I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();
    } else {
      $("#beepBoopResult").text(toOutput().join("-"));
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();
      console.log(toOutput());
    }
    event.preventDefault();
  });
});
