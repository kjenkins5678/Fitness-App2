// ***********************************************
// listeners
// ***********************************************


// **********************************************
// click a user 
// **********************************************

$("#userList").on("click", "a", function() {
    event.preventDefault();
    selectedUserID = parseInt($(this).attr("data-id"));
    //alert (selectedUserID); 
    activityEntryHeaderElem.text("Log Nutrition for " + event.target.text);
  
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
  
  $("#.new-food").on("click", "a", function() {
    event.preventDefault();
    selectedCatID = parseInt($(this).attr("data-id"));
  
    $("#.new-food").empty();
  
    $.ajax({
      method: "GET",
      url: "/api/getFoodNameList/" + selectedCatID
    }).then(function(dbAct) {
  
  
      li = "";
      for (i=0;i<dbAct.length;i++){
        li='<li><p><a href="" class="nutritionLink" met="' + dbAct[i].met + '" data-id="' + dbAct[i].id + '">' + dbAct[i].foodNameList + '</a></p></li>';
        //console.log(li);
        $("#actList").append(li);
      };
    });
  });
  
  // **********************************************
  // click nutrition
  // **********************************************
  
  $("#foodNameList").on("click", "a", function() {
    event.preventDefault();
    selectedActID = parseInt($(this).attr("data-id"));
    selectedActMET = parseInt($(this).attr("met"));
    //console.log(selectedActMET);
  });
  
  // **********************************************
  // save nutrition
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