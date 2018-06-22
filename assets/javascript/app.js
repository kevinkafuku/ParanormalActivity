$(document).ready(function() {
    var queryURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c3c56561b15f423f8748a3b782996fd3";       
    //When the AJAX request is copmplete,


    $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/' + 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3c56561b15f423f8748a3b782996fd3'
      }).then(function(data) {
        console.log(data);
      });

      console.log("THIS NEWS API ACTUALLY WORKS?!?!");

});