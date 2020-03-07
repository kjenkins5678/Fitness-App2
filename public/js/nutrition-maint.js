// **********************************************
// globals
// **********************************************
var newFoodDesc = $("#food_desc");

var newFoodButton = $(".new-food");

var newFoodName = $("#food_name");

var deleteFoodButton = $(".delete-food");
var updateFoodButton = $(".update-food");
var foodNameList = $(".foodNameList");
var foodDescList = $(".foodDescList");

var selectedFood = 0;

// **********************************************
// functions
// **********************************************

// **********************************************
// listeners
// **********************************************

// category listeners

newFoodButton.on("click", function () {
  event.preventDefault();
  var newFoodDesc = newFoodDesc.val().trim();
  var newDescInsert = { FdGrp_desc: newFoodDesc };
  $.post("/api/newFoodDesc", newDescInsert).then(function (dbCat) {
    console.log("insert ok" + dbCat);
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
  }).then(function (dbCat) {
    console.log("deleted  " + dbCat);
    location.reload();
  });
});

// activity listeners

newFoodButton.on("click", function () {
  event.preventDefault();

  var descID = window.location.href.substring(window.location.href.lastIndexOf('/')+1); 
  console.log("new activity selected cat " + descID);



  //var foodID = window.location.href.substring(window.location.href.lastIndexOf('/')+1); 
  console.log("new food  ");
  var newFood = newFoodName.val().trim();
  var newFoodInsert = { fdgrp_desc: fdgrp_desc, fdName: newFood };
  $.post("/api/newFood", newFoodInsert).then(function (dbCat) {
    console.log("insert ok" + dbCat);
    location.reload();
  });
});



updateActButton.on("click", function () {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("updateActButton id " + id + "\n" + $("#fdName" + id).val().trim() + "\n" + $("#cal" + id).val());
  var updObj = { fdname: $("#fdName" + id).val().trim(), calories: $("#cal" + id).val() };
  $.ajax({
    method: "POST",
    url: "/api/updFoodName/" + id,
    data: updObj
  }).then(function (dbCat) {
    console.log("updated  " + dbCat);
    //location.reload();
  });

});

deleteActButton.on("click", function () {
  event.preventDefault();
  var id = event.target.getAttribute("data-foodid");
  console.log("deleteActButton foodid " + id);
  $.ajax({
    method: "DELETE",
    url: "/api/delFoodName/" + id
  }).then(function (dbCat) {
    console.log("deleted  " + dbCat);
    location.reload();
  });
});

// click on any anchor tag 

$(document).on("click", "a", function () {
  //event.preventDefault();
  //selectedCat = parseInt($(this).attr("data-id"));
  //alert(selectedCat);
});

// **********************************************
// init
// **********************************************