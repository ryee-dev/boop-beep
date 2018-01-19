/*
Specifications:
1. put user's input into an array
2. for loop to see if the array contains any "1" or "0"
3. if the array contains a "1", to return "Boop!", and if array contains "2", to return "Beep!"
4. if the array contains a "3", to return "I'm sorry, Dave. I'm afraid I can't do that."

*/
var checkBeeps = function(numArray) {
  var beepCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "0") {
      beepCheck = true;
    }
  }
  return beepCheck;
};

var checkBoops = function(numArray) {
  var boopCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "1") {
      boopCheck = true;
    }
  }
  return boopCheck;
};

var checkDave = function(numArray) {
  var daveCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "3") {
      daveCheck = true;
    }
  }
  return daveCheck;
};

$(document).ready(function() {
  $("form#boopForm").submit(function(event){
    event.preventDefault();

    var numInput = $("#num").val();
    var numArray = Array.from(numInput);

    var isBeep = checkBeeps(numArray);
    var isBoop = checkBoops(numArray);
    var isDave = checkDave(numArray);

    console.log(numArray);

    if(isDave === true) {
      $("#beepBoopResult").text("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (isBoop === true) {
      $("#beepBoopResult").text("Boop!");
    } else if(isBeep === true) {
      $("#beepBoopResult").text("Beep!");
    }

  });

});
