// Add functionality to the Facts True/False buttons
// >> When clicking on each button, a pop-up window will appear on the screen
// >> For each fact > Depending on whether the user picked the correct or incorrect option, a different window will appear
// >> Ie for 4 facts, we need 8 different pop-up windows

// When click on button: display pop-up window
$(".btn").on("click", function() {
  console.log("clicked"); // This line is to check that the button click is being registered by the browser

});

// When click on the correct option: Display "success" text
$(".correct").on("click", function() {
  console.log("correct!");
});

// When click on the incorrect option: Display "failure" text
$(".incorrect").on("click", function() {
  console.log("incorrect!");
});
