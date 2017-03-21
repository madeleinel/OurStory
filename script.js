// Add functionality to the Facts True/False buttons
// >> When clicking on each button, a pop-up window will appear on the screen
// >> For each fact > Depending on whether the user picked the correct or incorrect option, a different window will appear
// >> Ie for 4 facts, we need 8 different pop-up windows

// When click on one of the True/False buttons (class "choice"): display pop-up window
$(".choice").on("click", function() {
  console.log("clicked"); // This line is to check that the button click is being registered by the browser

  // When click on any of the True/False buttons: Display the pop-up window (id "popup")
  // $("#popup").css({"display": "block;"});
});

// When click on the correct option: Display "success" text
$(".correct").on("click", function() {
  console.log("correct!");
});

// When click on the incorrect option: Display "failure" text
$(".incorrect").on("click", function() {
  console.log("incorrect!");
});
