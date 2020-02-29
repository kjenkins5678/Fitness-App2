// **********************************************
// globals
// **********************************************
var newCatElem = $("#category-name");
var newCatButton = $("#submit-cat");
var deleteCatButton = $(".delete-cat");
var newActButton = $("#submit-act");
var newActElem = $("#activity-name");
var newMetElem = $("#new-met");

var selectedCat = 0;

// **********************************************
// functions
// **********************************************

// **********************************************
// listeners
// **********************************************

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

newActButton.on("click", function() {
  event.preventDefault();
  console.log("new activity selected cat " + window.location.href);
  /*
  var newAct = newActElem.val().trim();
  var newMet = newMetElem.val().trim();
  var newActInsert = {activity_name: newAct, met: newMet, fk_activity_category: selectedCat}; 
  $.post("/api/newActivity", newActInsert).then(function(dbCat){
    console.log("insert ok" + dbCat);
    //location.reload();
  });
*/
});

$(document).on("click", "a", function() {
  //selectedCat = parseInt($(this).attr("data-id"));
  //alert(selectedCat);
});

// **********************************************
// init
// **********************************************