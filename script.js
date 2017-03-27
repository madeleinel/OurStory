// Add functionality to the Facts True/False buttons
// >> When clicking on each button, a pop-up window will appear on the screen
// The user will be told whether they chose correctly or not, and additional information about the fact

// Only run the following code when everything else on the page has loaded:
$(document).ready(function showPopups() {

  // When click on any of the True/False buttons: display the pop-up window
  $(".choice").click(function() {
    console.log("clicked a button");
    $(".web_dialog").show();
  })
  // Clicking on the Close button will call hide the pop-up windows
  $(".btn-close").click(function(e) {
    $(".web_dialog").hide();
  });

  // Clicking on the correct button will display a Success message
  $(".correct").click(function(e) {
    console.log("clicked the correct button");
    $(".title_correct").show();
    $(".title_incorrect").hide();
  })
  // Clicking on the wrong button will display a Failure message
  $(".incorrect").click(function(e) {
    console.log("clicked the incorrect button");
    $(".title_incorrect").show();
    $(".title_correct").hide();
  })

  // Clicking on a true/false button for each fact will:
  // display more information about that specific fact,
  // and hide the additional information about the other facts
  $("#btn-first").click(function() {
    $(".fact_popup").hide();
    $("#first_fact").show();
  })
  $("#btn-second").click(function() {
    $(".fact_popup").hide();
    $("#second_fact").show();
  })
  $("#btn-third").click(function() {
    $(".fact_popup").hide();
    $("#third").show();
  })
  $("#btn-fourth").click(function() {
    $(".fact_popup").hide();
    $("#fourth").show();
  })
});
