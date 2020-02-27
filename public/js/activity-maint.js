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
newCatButton.on("click",function (){
   event.preventDefault();
   console.log ("new category"); 
}); 

deleteCatButton.on("click",function (){
   event.preventDefault();
   //console.log ("here i am"); 
   //console.log (event.target); 
   var id = event.target.getAttribute ("data-id"); 
   console.log ("delete id " + id); 
}); 

newActButton.on("click",function() {
   event.preventDefault();
   console.log ("new activity"); 
})

$(document).on("click", "a", function() {
    //this == the link that was clicked
    var href = $(this).attr("href");
    //alert("You're trying to go to " + href);
    selectedCat = parseInt($(this).attr("data-id"));
    alert("ID " + selectedCat);
});

// **********************************************
// init 
// **********************************************