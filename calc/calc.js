/*
 * All buttons append number/arithmetic operation
 * If arithmetic operation = True when user clicks arithmetic operation, calculate the operation first
 */

$("button").click(function () {
  console.log("clicked");
  $("#display").enable();
  $("#display").html($(this).value);
});
