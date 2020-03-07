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
        li='<li><p><a href="" class="nutritionLink" met="' + dbNut[i].met + '" data-id="' + dbNut[i].id + '">' + dbAct[i].foodNameList + '</a></p></li>';
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
  
    console.log ("user " + selectedUserID + " category " + selectedCatID + " activity " + selectedNutID); 
  
    var nutritionActivity = {
      day_eaten : moment().format ('MM/DD/YYYY'),
      food_name : "",
      food_amount: "",
      calories_of_food : Math.round (getFoodNameList * getSelectedFood), 
      fk_user : selectedUserID,
      fk_nutrition : getSelectedFood
    };
  
    console.log (newFoodButton); 
  
    $.post("/api/newFoodButton", newFoodButton).then(function(dbUA) {
      console.log("user insert ok" + dbUA);
    });
  
  });
  
  // **********************************************
  // init
  // **********************************************
  
  getLocation();