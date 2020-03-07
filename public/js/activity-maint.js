// **********************************************
// globals
// **********************************************
var newCatElem = $("#category-name");
var newCatButton = $("#submit-cat");
var deleteCatButton = $(".delete-cat");

var newActButton = $("#submit-act");
var newActElem = $("#activity-name");

var newMetElem = $("#new-met");

var deleteActButton = $(".delete-act");
var updateActButton = $(".update-act");

var actNameList = $(".actNameList");
var actMetList = $(".actMetList");

var selectedCat = 0;

// **********************************************
// functions
// **********************************************

// **********************************************
// listeners
// **********************************************

// category listeners


newCatButton.on("click", function() {
  event.preventDefault();
  var newCat = newCatElem.val().trim();
  var newCatInsert = {category_name: newCat}; 
  $.post("/api/newCat", newCatInsert).then(function(dbCat){
    console.log("insert ok" + dbCat);
    location.reload();
  });
});

deleteCatButton.on("click", function() {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("delete id " + id);
  $.ajax({
    method: "DELETE",
    url: "/api/delCat/" + id
  }).then(function(dbCat) {
    console.log("deleted  " + dbCat);
    location.reload();
  });
});

// activity listeners

newActButton.on("click", function() {
  event.preventDefault();
  var catID = window.location.href.substring(window.location.href.lastIndexOf('/')+1); 

  var newAct = newActElem.val().trim();
  var newMet = newMetElem.val().trim();
  var newActInsert = {activity_name: newAct, met: newMet, fk_activity_category: catID}; 
  $.post("/api/newActivity", newActInsert).then(function(dbCat){
    console.log("insert ok" + dbCat);
    location.reload();
  });
});

updateActButton.on("click", function() {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("updateActButton id " + id + "\n" + $("#actName"+id).val().trim() + "\n" + $("#actMet"+id).val());
  var updObj = {activity_name: $("#actName"+id).val().trim(), met: $("#actMet"+id).val()};
  $.ajax({
    method:"POST",
    url: "/api/updActivity/" + id, 
    data: updObj
  }).then(function(dbCat) {
    console.log("updated  " + dbCat);
    //location.reload();
  });

});

deleteActButton.on("click", function() {
  event.preventDefault();
  var id = event.target.getAttribute("data-id");
  console.log("deleteActButton id " + id);
  $.ajax({
    method: "DELETE",
    url: "/api/delActivity/" + id
  }).then(function(dbCat) {
    console.log("deleted  " + dbCat);
    location.reload();
  });
});

// click on any anchor tag 

$(document).on("click", "a", function() {
  //event.preventDefault();
  //selectedCat = parseInt($(this).attr("data-id"));
  //alert(selectedCat);
});

// **********************************************
// init
// **********************************************