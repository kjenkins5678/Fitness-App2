// **********************************************
// globals
// **********************************************
var newCatElem = $("#category-name");
var newCatButton = $("#submit-cat"); 
var deleteCatButton = $(".delete-cat"); 
var newActButton = $("#submit_act");

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
  console.log("new activity");
})

$(document).on("click", "a", function() {
  selectedCat = parseInt($(this).attr("data-id"));
  //alert("ID " + selectedCat);
});

// **********************************************
// init
// **********************************************