// **********************************************
// globals
// **********************************************
var newFoodDesc = $("#food_desc");
var newFoodDescButton = $("#submit_desc");
var deleteFoodDescButton = $(".del-fooddesc");

var newFood = $("#new-food");
var newFoodButton = $("#submit-food");

var newFoodName = $("#food_name");
var deleteFoodButton = $(".delete-food");
var updateFoodButton = $(".update-food");

var newCalories = $("#new-cal");
var newAmount  = $("#new-amt");
var newProtein  = $("#new-pro");
var newFat  = $("#new-fat");
var newCarbohydrates  = $("#new-carb");
var newFoodGroupDesc  = $("#new-foodcat");

var foodNameList = $(".foodNameList");
var foodCalList = $(".foodCalList");

var foodGroupList = $(".foodGroupList");
var foodAmtList = $(".foodAmtList");
var foodProList = $(".foodProList");
var foodFatList = $(".foodFatList");
var foodCarbList = $(".foodCarbList");

var selectedCat = 0;

// **********************************************
// functions
// **********************************************

// **********************************************
// listeners
// **********************************************


// category listeners
// newFoodDescButton.on("click", function () {
//   event.preventDefault();
//   var newDesc = newFoodDesc.val().trim();
//   var newFoodDescInsert = {FdGrp_Desc: newDesc };
//   $.post("/api/newDesc", newFoodDescInsert).then(function (dbFood) {
//     console.log("insert ok" + dbFood);
//     location.reload();
//   });
// });

newFoodDescButton.on("click", function(){
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("updateFoodButton id" + id + "\n"+$("#foodName"+id).val());
  var updObj = {FdName: $("#foodName"+id).val()};
  $.ajax({
    method:"GET",
    url: "/api/updNewDesc/" + id, 
    data: updObj
  }).then(function(dbFood) {
    console.log("updated  " + dbFood);
    //location.reload();
  });

});



deleteFoodDescButton.on("click", function() {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("delete food desc " + id);
  $.ajax({
    method: "DELETE",
    url: "/api/del-fooddesc/" + id
  }).then(function(dbFood) {
    console.log("deleted  " + dbFood);
    location.reload();
  });
});



/////////////////////////
newFoodButton.on("click", function () {
  event.preventDefault();
  //var newfoodID = window.location.href.substring(0, (window.location.href.lastIndexOf("/")) + 1);
  var newfoodID = window.location.href.substring(window.location.href.lastIndexOf('/')+1); 
  var newFd = newFood.val().trim();
  var newCal = newCalories.val().trim();
  var newPro = newProtein.val().trim();
  var newFt = newFat.val().trim();
  var newAmt = newAmount.val().trim();
  var newCarb = newCarbohydrates.val().trim();
  var newFoodCat = newFoodGroupDesc.val().trim();
  var newFoodInsert = { 
    FdName: newFd, 
    Calories: newCal, 
    Protein: newPro,
    Fat: newFt,
    Carbohydrates: newCarb,
    Amount: newAmt,
    FdGrp_desc: newFoodCat,
    FoodId: newfoodID
  };
  $.post("/api/newFd", newFoodInsert).then(function (dbFood) {
    console.log("insert ok" + dbFood);
    location.reload();
  });
});

deleteFoodButton.on("click", function () {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("delete foodid " + id);
  $.ajax({
    method: "DELETE",
    url: "/api/delFoodDesc/" + id
  }).then(function (dbFood) {
    console.log("deleted  " + dbFood);
    location.reload();
  });
});


updateFoodButton.on("click", function(){
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("updateFoodButton id" + id + "\n"+$("#foodName"+id).val().trim() + "\n" + $("#foodCal").val());
  var updObj = {FdName: $("#foodName"+id).val().trim(), Calories: $("#foodCal"+id).val()};
  $.ajax({
    method:"POST",
    url: "/api/updFood/" + id, 
    data: updObj
  }).then(function(dbFood) {
    console.log("updated  " + dbFood);
    //location.reload();
  });

});
// activity listeners

// newFoodButton.on("click", function () {
//   event.preventDefault();

//   var descID = window.location.href.substring(window.location.href.lastIndexOf('/')+1); 
//   console.log("new activity selected cat " + descID);



//   //var foodID = window.location.href.substring(window.location.href.lastIndexOf('/')+1); 
//   console.log("new food  ");
//   var newFood = newFoodName.val().trim();
//   var newFoodInsert = { fdgrp_desc: fdgrp_desc, fdName: newFood };
//   $.post("/api/newFood", newFoodInsert).then(function (dbCat) {
//     console.log("insert ok" + dbCat);
//     location.reload();
//   });
// });



// updateActButton.on("click", function () {
//   event.preventDefault();
//   var id = event.target.getAttribute("data-id");
//   console.log("updateActButton id " + id + "\n" + $("#fdName" + id).val().trim() + "\n" + $("#cal" + id).val());
//   var updObj = { fdname: $("#fdName" + id).val().trim(), calories: $("#cal" + id).val() };
//   $.ajax({
//     method: "POST",
//     url: "/api/updFoodName/" + id,
//     data: updObj
//   }).then(function (dbCat) {
//     console.log("updated  " + dbCat);
//     //location.reload();
//   });

// });

// deleteActButton.on("click", function () {
//   event.preventDefault();
//   var id = event.target.getAttribute("data-foodid");
//   console.log("deleteActButton foodid " + id);
//   $.ajax({
//     method: "DELETE",
//     url: "/api/delFoodName/" + id
//   }).then(function (dbCat) {
//     console.log("deleted  " + dbCat);
//     location.reload();
//   });
// });

// click on any anchor tag 

$(document).on("click", "a", function () {
  //event.preventDefault();
  //selectedCat = parseInt($(this).attr("data-id"));
  //alert(selectedCat);
});

// **********************************************
// init
// **********************************************