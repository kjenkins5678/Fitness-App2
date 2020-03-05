// **********************************************
// globals
// **********************************************

var activityEntryHeaderElem = $("#activity-entry-header");
var durationInputElem = $("#duration-input");
var submitUserActElem = $("#submit-user-act");

var selectedUserID = 0;
var selectedCatID = 0;
var selectedActID = 0;

// **********************************************
// functions
// **********************************************

// **********************************************
// listeners
// **********************************************

$("#userList").on("click", "a", function() {
  event.preventDefault();
  selectedUserID = parseInt($(this).attr("data-id"));
  //alert (selectedUserID); 
  activityEntryHeaderElem.text("Log Activity for " + event.target.text);
});

$("#catList").on("click", "a", function() {
  event.preventDefault();
  selectedCatID = parseInt($(this).attr("data-id"));

  $("#actList").empty();

  $.ajax({
    method: "GET",
    url: "/api/getActivitiesByCategory/" + selectedCatID
  }).then(function(dbAct) {

    console.log("I'm back");
    console.log(dbAct);
  });
});

$("#actList").on("click", "a", function() {
  event.preventDefault();
  selectedActID = parseInt($(this).attr("data-id"));
});

submitUserActElem.on("click", function (){

  console.log ("user " + selectedUserID + " category " + selectedCatID + " activity " + selectedActID); 

  // $.post("/api/newActivity", newActInsert).then(function(dbCat){
  // console.log("insert ok" + dbCat);

});

// **********************************************
// init
// **********************************************