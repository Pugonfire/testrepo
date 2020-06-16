/*
 * All buttons append number/arithmetic operation
 * If arithmetic operation = True when user clicks arithmetic operation, calculate the operation first
 */
window.onbeforeunload = function (e) {
  localStorage.clear();
};

$("button[value]").click(function () {
  if (localStorage.opin) {
    // no. input after operation to clear display
    $("#display").val("");
    localStorage.removeItem("opin");
  } else if (localStorage.equal) {
    // starting new operation
    clearAll();
  } else {
  }
  var button = $(this).val();
  var num = $("#display").val() + button; // append new character to the display
  $("#display").val(num);
});

$("#addButton").click(function () {
  operator("+");
});

$("#subtractButton").click(function () {
  operator("-");
});

$("#multiplyButton").click(function () {
  operator("*");
});

$("#divideButton").click(function () {
  operator("/");
});

$("#equalsButton").click(function () {
  var num = $("#display").val();
  if (localStorage.equal && localStorage.num2) {
    //repeat previous operation
    equals(
      JSON.parse(localStorage.num1),
      JSON.parse(localStorage.op),
      JSON.parse(localStorage.num2)
    );
  } else {
    equals(JSON.parse(localStorage.num1), JSON.parse(localStorage.op), num);
    localStorage.num2 = JSON.stringify(num); // stored to repeat previous operation
  }
});

$("#clearButton").click(function () {
  clearAll();
});

function equals(num1, op, num2) {
  console.log(num1 + op + num2);
  var answer = eval(num1 + op + num2);
  $("#display").val(answer);
  localStorage.equal = true;
  localStorage.num1 = JSON.stringify(answer);
}

function operator(op) {
  var num = $("#display").val();
  if (localStorage.equal) {
    //continue a new operation
    localStorage.removeItem("op");
    localStorage.num1 = JSON.stringify(num);
    localStorage.removeItem("equal");
  } else if (localStorage.opin) {
    // when user selects multiple operators
    localStorage.removeItem("op");
  } else if (localStorage.op) {
    // performing an operation on multiple numbers
    equals(JSON.parse(localStorage.num1), JSON.parse(localStorage.op), num);
    localStorage.removeItem("op");
  } else {
    localStorage.num1 = JSON.stringify(num);
  }
  localStorage.op = JSON.stringify(op);
  localStorage.opin = true;
  console.log(localStorage);
}

function clearAll() {
  $("#display").val("");
  localStorage.clear();
  console.log("cleared" + localStorage);
}
