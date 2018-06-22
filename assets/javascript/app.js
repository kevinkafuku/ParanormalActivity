$(document).ready(function() {
    var queryURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c3c56561b15f423f8748a3b782996fd3";       
    //When the AJAX request is copmplete,

$("body").on("click", "button", function() {
  event.preventDefault();

  console.log("the search button was clicked");

})

    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/' + 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3c56561b15f423f8748a3b782996fd3'
    }).then(function(data) {
      console.log(data);

      $("#newsDisplay").text("hello news will go here");
      var results = data.data;

      

    });

      console.log("THIS NEWS API ACTUALLY WORKS?!?!");

    

});