// Add functionality to the Facts True/False buttons
// >> When clicking on each button, a pop-up window will appear on the screen
// For each fact > Depending on whether the user picked the correct or incorrect option, a different window will appear
// >> Ie for 4 facts, we need 8 different pop-up windows

// Only run the following code when everything else on the page has loaded:
$(document).ready(function showPopups() {
  // When click on the correct button for the first fact:
  $("#btn-first-correct").click(function(e) {
    // Display the pop-up window for: correct answer on the first "fact":
    showWindow1C();
  });
  // And set up the same function for all 8 buttons in the same way:
  $("#btn-first-incorrect").click(function(e) { showWindow1I(); });
  $("#btn-second-correct").click(function(e) { showWindow2C(); });
  $("#btn-second-incorrect").click(function(e) { showWindow2I(); });
  $("#btn-third-correct").click(function(e) { showWindow3C(); });
  $("#btn-third-incorrect").click(function(e) { showWindow3I(); });
  $("#btn-fourth-correct").click(function(e) { showWindow4C(); });
  $("#btn-fourth-incorrect").click(function(e) { showWindow4I(); });

  // Clicking on this button will call the function that closes the pop-up windows
  $(".btn-close").click(function(e) {
    hideWindow();
  });
});

// These functions will open the pop-up windows
// They are being called when the user clicks on the corresponding button (see on-click functions above)

// Display the pop-up window for the correct answer on the first "fact":
function showWindow1C() { $("#popup-first-correct").show(); }
// Display the pop-up window for the incorrect answer on the first "fact":
function showWindow1I() { $("#popup-first-incorrect").show(); }
// And set up the same functions for the other 3 "facts" in the same way:
function showWindow2C() { $("#popup-second-correct").show(); }
function showWindow2I() { $("#popup-second-incorrect").show(); }
function showWindow3C() { $("#popup-third-correct").show(); }
function showWindow3I() { $("#popup-third-incorrect").show(); }
function showWindow4C() { $("#popup-fourth-correct").show(); }
function showWindow4I() { $("#popup-fourth-incorrect").show(); }

// This function will close the pop-up windows
// It is linked to the closing button in each pop-up window: clicking one of these buttons will close all pop-up windows
function hideWindow() {
  $("#popup-first-correct").hide();
  $("#popup-first-incorrect").hide();
  $("#popup-second-correct").hide();
  $("#popup-second-incorrect").hide();
  $("#popup-third-correct").hide();
  $("#popup-third-incorrect").hide();
  $("#popup-fourth-correct").hide();
  $("#popup-fourth-incorrect").hide();
}

// Use later on?
// function showWindow() {
//   console.log(this.document.activeElement.id);
// }
