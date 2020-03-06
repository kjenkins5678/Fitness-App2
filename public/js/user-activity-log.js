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

var forecast = {
  description: "",
  temp: "",
  temp_min: "",
  temp_max: "",
  deg: "",
  direction: "",
  speed: "",
  cloud_cover_pct:""
};

var weaxCurrTempElem = $("#weaxCurrTemp");
var weaxMinTempElem = $("#weaxMinTemp");
var weaxMaxTempElem = $("#weaxMaxTemp");
var weaxDescriptionElem = $("#weaxDescription");
var weaxWindSpeedElem = $("#weaxWindSpeed");
var weaxWindDirectionElem = $("#weaxWindDirection");
var weaxCloudCoverPctElem = $("#weaxCloudCoverPct");
var weaxIconElem = $("#weaxIcon");

// **********************************************
// functions
// **********************************************

function getCardinalDirection(deg){
  if (deg >= 000 && deg <= 020){
    return "North";
  } else if (deg >= 021 && deg <= 070) {
    return "NorthEast";
  } else if (deg >= 071 && deg <= 115) {
    return "East";
  } else if (deg >= 116 && deg <= 150) {
    return "SouthEast";
  } else if (deg >= 151 && deg <= 200) {
    return "South";
  } else if (deg >= 201 && deg <= 250) {
    return "SouthWest";
  } else if (deg >= 251 && deg <= 290) {
    return "West";
  } else if (deg >= 291 && deg <= 340) {
    return "NorthWest";
  } else if (deg >= 341 && deg <= 360) {
    return "North";
  }
}

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
  console.log(
    "Your coordinates are Latitude: " +
      latitude +
      " Longitude " +
      longitude +
      " ow api key " || process.env.OW_API_KEY
  );

/*  $.ajax({
    method: "GET",
    url:"/api/getWeax/"
  }).then(function(dbWeax) {

    console.log (dbWeax); 

    forecast.description = dbWeax[0].description;
*/

  var owApiKey = "642722fdfe11197400af4a85e9c528a0";

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="
    + latitude + "&lon=" + longitude + "&units=imperial&appid=" + owApiKey;

  //var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="
  //  + latitude + "&lon=" + longitude + "&units=imperial&appid=" + "166a433c57516f51dfab1f7edaed8413";

  //var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="
  //  + latitude + "&lon=" + longitude + "&units=imperial&appid=" + process.env.OW_API_KEY;
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    forecast.description = response.weather[0].description;
    forecast.temp = Math.round(response.main.temp);
    forecast.temp_min = Math.round(response.main.temp_min);
    forecast.temp_max = Math.round(response.main.temp_max);
    forecast.deg = response.wind.deg;
    forecast.direction = getCardinalDirection(response.wind.deg);
    forecast.speed = Math.round(response.wind.speed);
    forecast.cloud_cover_pct = response.clouds.all;

    console.log(forecast);
    console.log(response.weather[0].icon);

    weaxDescriptionElem.text(forecast.description);
    weaxCurrTempElem.text(forecast.temp + '\xB0');
    weaxMinTempElem.text(forecast.temp_min + '\xB0');
    weaxMaxTempElem.text(forecast.temp_max + '\xB0');

    weaxWindSpeedElem.text(forecast.speed + "mph");
    weaxWindDirectionElem.text(forecast.direction);
    weaxCloudCoverPctElem.text(forecast.cloud_cover_pct + "%");

    weaxIconElem.attr("src",  "https://openweathermap.org/img/wn/"
      + response.weather[0].icon 
      + "@2x.png");

  });
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

});

// **********************************************
// init
// **********************************************

getLocation();

