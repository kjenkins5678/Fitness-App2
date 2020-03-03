// **********************************************
// Globals
// Get references to page elements
// **********************************************

var nameInputElem = $("#user-name"); 
var ageInputElem = $("#age");
var heightInputElem = $("#height-in");
var weightInputElem = $("#weight-lb");
var genderInputElem = $("#gender");
var activityLevelInputElem = $("#activity-level");
var goalInputElem = $("#goal");
var goalsH5Elem = $("#goalsH5");

var calsPerDayElem = $("#cals-per-day");
var fatPerDayElem = $("#fat-per-day");
var carbsPerDayElem = $("#carbs-per-day");
var proteinPerDayElem = $("#protein-per-day");

var nameInput;
var ageInput;
var heightInput;
var heightCM;
var weightInput;
var weightKG;
var genderInput;
var activityLevelInput;
var goalInput;

var userListElem = $("#userList");

var currentId=0;

// **********************************************
// functions
// **********************************************

// **********************************************
// blank out fields
// **********************************************

function clearElems () {

  nameInputElem.val("");
  ageInputElem.val("");
  heightInputElem.val("");
  weightInputElem.val("");
  genderInputElem.val("");
  activityLevelInputElem.val("");
  goalInputElem.val("");
  goalsH5Elem.val("");
  calsPerDayElem.text("");
  fatPerDayElem.text("");
  carbsPerDayElem.text("");
  proteinPerDayElem.text("");

}; // clearElems

// **********************************************
// calculate
// **********************************************

function calculate() {
  var calsPerDay = Math.round(10 * weightKG + 6.25 * heightCM - 5 * ageInput);
  var fatPerDay;
  var carbsPerDay;
  var proteinPerDay;

  if (genderInput === "Male"){
    calsPerDay += 5;
  } else if (genderInput === "Female") {
    calsPerDay -= 161;
  }

  switch(activityLevelInput){
    case "Sedentary":
      calsPerDay = calsPerDay * 1.2;
      break;
    case "Moderate":
      calsPerDay = (calsPerDay * 1.2) + 250;
      break;
    case "Vigorous":
      calsPerDay = (calsPerDay * 1.2) + 500;
      break;
  };

  calsPerDay = Math.round (calsPerDay);
  calsPerDayElem.text(calsPerDay);

  switch(activityLevelInput){
  case 'Sedentary':
    tdee = calsPerDay * 1.01; 
    break; 
  case 'Moderate':
    tdee = calsPerDay * 1.05;  
    break; 
  case 'Vigorous':
    tdee = calsPerDay * 1.1; 
    break; 
  default: 
    tdee = calsPerDay * 1.01; 
    break; 
  };
  tdee = Math.round(tdee); 

  switch(goalInput){
  case "Lose Weight":
    fatPerDay = tdee * .13;
    carbsPerDay = tdee * .12;
    proteinPerDay = tdee * .14;
    break;
  case "Gain":
    fatPerDay = tdee * .3;
    carbsPerDay = tdee * .23;
    proteinPerDay = tdee * .18;
    break;
  case "Recomp":
    fatPerDay = tdee * 0.15;
    carbsPerDay = tdee * 0.14;
    proteinPerDay = tdee * 0.14;
    break;
  }
  fatPerDay = Math.round (fatPerDay / 4); 
  carbsPerDay = Math.round (carbsPerDay / 4); 
  proteinPerDay = Math.round (proteinPerDay / 4);

   carbsPerDayElem.text(carbsPerDay);  
   proteinPerDayElem.text(proteinPerDay);  
   fatPerDayElem.text(fatPerDay); 

}; // calculate

// **********************************************
// editInputs
// **********************************************

function editInputs (){

  if (ageInputElem.val() === "" || ageInputElem.val() === null) {
    return "You must enter an age. Please retry";
  }

  if (ageInputElem.val() < 10 || ageInputElem.val() > 105) {
    return "Age invalid. Please retry";
  }

  if (heightInputElem.val() === "" || heightInputElem.val() === null) {
    return "You must enter a height. Please retry";
  }

  if (heightInputElem.val() < 48 || heightInputElem.val() > 96) {
    return "Height invalid. Please retry";
  }

  if (weightInputElem.val() === "" || weightInputElem.val() === null) {
    return "You must enter a weight. Please retry";
  }

  if (weightInputElem.val() < 80 || weightInputElem.val() > 600) {
    return "Weight invalid. Please retry";
  }
  return "";

} // editInputs

// **********************************************
// listeners
// **********************************************

// **********************************************
// submit new user
// **********************************************

$("#submit-user").on("click", function (){
  event.preventDefault();
  console.log ("submit-user"); 
  clearElems(); 
  var newName = $("#new-user-name").val(); 
  goalsH5Elem.text("Goals for " + newName);
  nameInputElem.val(newName);

  console.log(newName);
  var li =
    '<li><p><a href="" class="userLink" data-id="0">' 
    + newName
    + '</a><button class="btn btn-danger btn-sm float-right delete-cat" data-id="{{id}}">ｘ</button>'
    + '</p></li>';

  console.log (li);
  userListElem.append(li);

});

// **********************************************
// calc user
// **********************************************

$("#calc-user").on("click", function () {
  event.preventDefault();

  nameInput = nameInputElem.val(); 
  ageInput = ageInputElem.val();
  heightInput = heightInputElem.val(); 
  heightCM = heightInput * 2.54;
  weightInput = weightInputElem.val();
  weightKG = weightInput * 0.453592;
  genderInput = genderInputElem.val();
  activityLevelInput = activityLevelInputElem.val();
  goalInput = goalInputElem.val();

  console.log (
    nameInput + "\n" +
    ageInput + "\n" + 
    heightInput + "\n" +
    heightCM + "\n" + 
    weightInput + "\n" +
    weightKG + "\n" + 
    genderInput + "\n" +
    activityLevelInput + "\n" +
    goalInput
  );

  var err = editInputs();

  if (err != ""){
    alert (err);
    return;
  };

  calculate();

}); // calc-user click

// **********************************************
// save a user
// **********************************************

$("#upsert-user").on("click", function() {
  event.preventDefault();
  //console.log ("upsert-user"); 
  //alert("upsert-user");

  $.ajax({
    method: "GET",
    url: "/api/getUserName/" + nameInputElem.val().trim()
  }).then(function(dbUser) {
    var userUpsert;
    if (dbUser.length === 0) {
      //alert("not found");
      userUpsert = {
        user_name: nameInputElem.val().trim(),
        age: ageInputElem.val().trim(),
        height_inches: heightInputElem.val().trim(),
        height_cm: parseInt(heightInputElem.val().trim()) * 2.54,
        weight_lb: weightInputElem.val().trim(),
        weight_kg: weightInputElem.val().trim() * 0.453592,
        gender: genderInputElem.val().trim(),
        activity_level: activityLevelInputElem.val().trim(),
        goal: goalInputElem.val().trim(),
        calories_per_day: calsPerDayElem.text(),
        fat_per_day: fatPerDayElem.text(),
        carbs_per_day: carbsPerDayElem.text(),
        protein_per_day: proteinPerDayElem.text()
      };
      $.post("/api/newUser", userUpsert).then(function(dbUser) {
        console.log("user insert ok" + dbUser);
        location.reload();
      });
    } else {
      //alert("found, current ID " + currentId);
      userUpsert = {
        id: currentId,
        user_name: nameInputElem.val().trim(),
        age: ageInputElem.val().trim(),
        height_inches: heightInputElem.val().trim(),
        height_cm: parseInt(heightInputElem.val().trim()) * 2.54,
        weight_lb: weightInputElem.val().trim(),
        weight_kg: weightInputElem.val().trim() * 0.453592,
        gender: genderInputElem.val().trim(),
        activity_level: activityLevelInputElem.val().trim(),
        goal: goalInputElem.val().trim(),
        calories_per_day: calsPerDayElem.text(),
        fat_per_day: fatPerDayElem.text(),
        carbs_per_day: carbsPerDayElem.text(),
        protein_per_day: proteinPerDayElem.text()
      };

      console.log(userUpsert); 

      $.post("/api/updUser", userUpsert).then(function(dbUser) {
        console.log("user insert ok" + dbUser);
        location.reload();
      });
    }
  });
});

// **********************************************
// click on any anchor tag in the userList
// **********************************************

$("#userList").on("click", "a", function() {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  currentId = id; 
  var name = event.target.text;
  goalsH5Elem.text("Goals for " + name);

  $.ajax({
    method: "GET",
    url: "/api/getUser/" + id
  }).then(function(dbUser) {
    if (dbUser.length === 0) {
      return;
    }
    console.log("retrieved  " + dbUser[0].id);

    nameInputElem.val(dbUser[0].user_name);
    ageInputElem.val(dbUser[0].age);
    heightInputElem.val(dbUser[0].height_inches);
    weightInputElem.val(dbUser[0].weight_lb);
    genderInputElem.val(dbUser[0].gender);
    activityLevelInputElem.val(dbUser[0].activity_level);
    goalInputElem.val(dbUser[0].goal);
    calsPerDayElem.text(dbUser[0].calories_per_day);
    fatPerDayElem.text(dbUser[0].fat_per_day);
    carbsPerDayElem.text(dbUser[0].carbs_per_day);
    proteinPerDayElem.text(dbUser[0].protein_per_day);
  });
});

// **********************************************
// init
// **********************************************