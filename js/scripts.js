/*
Specifications:
1. put user's input into an array
2. for loop to see if the array contains any "1" or "0"
3. if the array contains a "1", to return "Boop!", and if array contains "2", to return "Beep!"
4. if the array contains a "3", to return "I'm sorry, Dave. I'm afraid I can't do that."

*/
// var checkName = function(nameInput) {
//   var nameCheck = false;
//     if(nameInput === "") {
//       nameCheck = true;
//     }
//   return nameCheck;
// };

var otherNums = function(numArray) {
  var numberAfter = "";
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "2" || numArray[i] === "4" || numArray[i] === "5" || numArray[i] === "7" || numArray[i] === "8") {
    numberAfter = numArray[i];
    }
  }
  return numberAfter;
};

var checkBeeps = function(numArray) {
  var beepCheck = "";
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "0") {
      beepCheck = " Beep! ";
    }
  }
  return beepCheck;
};

var checkBoops = function(numArray) {
  var boopCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "1" || numArray[i] === "1" && numArray[i+1] === "0") {
      boopCheck = true;
    }
  }
  return boopCheck;
};

// var checkDave = function(numArray) {
//   var daveCheck = false;
//   for(var i = 0; i < numArray.length; i++) {
//     if(numArray[i] === "3") {
//       daveCheck = true;
//     }
//   }
//   return daveCheck;
// };

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
    var nextNum = otherNums(numArray);
    // var noName = checkName(nameInput);

    // var isBeep = checkBeeps(numArray);
    // var isBoop = checkBoops(numArray);
    // var isDave = checkDave(numArray);
    var divisible = checkMod(numInput);

    console.log(numArray);

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

    // if(divisible === true) {
    //   $("#beepBoopResult").text("I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
    //   $("#SURPRISE").fadeIn(800);
    //   $("#boopForm")[0].reset();


    // } else if(isDave === true) {
    //   $("#beepBoopResult").text("I'm sorry, Dave. I'm afraid I can't do that.");
    //   $("#SURPRISE").fadeIn(800);
    //   $("#boopForm")[0].reset();


    // } else if (isBoop === true) {
    //   $("#beepBoopResult").push("Boop!");
    //   $("#SURPRISE").fadeIn(800);
    //   $("#boopForm")[0].reset();
    //
    // } else if(isBeep === true) {
    //   $("#beepBoopResult").text("Beep!");
    //   $("#SURPRISE").fadeIn(800);
    //   $("#boopForm")[0].reset();
    //
    // } else if (notOne === true) {
    //   $("#beepBoopResult").text(numInput);
    //   $("#SURPRISE").fadeIn(800);
    //   $("#boopForm")[0].reset();
    // } else {
    //   $("#beepBoopResult").text("Oops, you forgot to enter a number.");
    // }

  });
});
