// **********************************************
// globals
// **********************************************

var activityEntryHeaderElem = $("#activity-entry-header");
var durationInputElem = $("#duration-input");
var submitUserActElem = $("#submit-user-act");

var selectedUserID = 0;
var selectedUserWeightKG = 0;
var selectedCatID = 0;
var selectedActID = 0;
var selectedActMET = 0;

var latitude;
var longitude;

// **********************************************
// functions
// **********************************************

// **********************************************
// **********************************************

function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our loadPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(loadPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
} // getLocation

// **********************************************
// This will get called after getCurrentPosition()
// **********************************************

function loadPosition(position) {
  // Grab coordinates from the given object
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log ("Your coordinates are Latitude: " + latitude + " Longitude " + longitude);

} // loadPosition

// **********************************************
// listeners
// **********************************************

// **********************************************
// click a user 
// **********************************************

$("#userList").on("click", "a", function() {
  event.preventDefault();
  selectedUserID = parseInt($(this).attr("data-id"));
  //alert (selectedUserID); 
  activityEntryHeaderElem.text("Log Activity for " + event.target.text);

  $.ajax({
    method: "GET",
    url:"/api/getUser/"+selectedUserID
  }).then(function(dbUser) {

    selectedUserWeightKG = dbUser[0].weight_kg; 
    console.log ("weight kg " + selectedUserWeightKG); 

  });
});

// **********************************************
// click a category
// **********************************************

$("#catList").on("click", "a", function() {
  event.preventDefault();
  selectedCatID = parseInt($(this).attr("data-id"));

  $("#actList").empty();

  $.ajax({
    method: "GET",
    url: "/api/getActivitiesByCategory/" + selectedCatID
  }).then(function(dbAct) {

    //console.log("I'm back");
    //console.log(dbAct);

    li = "";
    for (i=0;i<dbAct.length;i++){
      li='<li><p><a href="" class="actLink" met="' + dbAct[i].met + '" data-id="' + dbAct[i].id + '">' + dbAct[i].activity_name + '</a></p></li>';
      //console.log(li);
      $("#actList").append(li);
    };
  });
});

// **********************************************
// click an activity 
// **********************************************

$("#actList").on("click", "a", function() {
  event.preventDefault();
  selectedActID = parseInt($(this).attr("data-id"));
  selectedActMET = parseInt($(this).attr("met"));
  //console.log(selectedActMET);
});

// **********************************************
// save an activity 
// **********************************************

submitUserActElem.on("click", function (){

  console.log ("user " + selectedUserID + " category " + selectedCatID + " activity " + selectedActID); 

  var newUserActivity = {
    activity_dt : moment().format ('MM/DD/YYYY'),
    duration : durationInputElem.val().trim(),
    duration_entry : "",
    calories_per_hour : Math.round (selectedUserWeightKG * selectedActMET), 
    calories_per_activity : Math.round (selectedUserWeightKG * selectedActMET * (durationInputElem.val().trim() / 60)), 
    fk_user : selectedUserID,
    fk_activity : selectedActID
  };

  console.log (newUserActivity); 

  $.post("/api/newUserActivity", newUserActivity).then(function(dbUA) {
    console.log("user insert ok" + dbUA);
  });

newUserActivity

});

// **********************************************
// init
// **********************************************

getLocation();
