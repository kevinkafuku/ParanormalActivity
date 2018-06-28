var keywords = ["aliens", "paranormal", "ghosts", "bigfoot", "area 51", "Roswell", "UFO", ""];




function buttonReview() {
    for (var i = 0; i < keywords.length; i++) {
      var a = $("<button>");
      a.addClass("tag");
      a.attr("data-name", keywords[i]);
      a.text(keywords[i]);
        
      $("#buttonsArea").append(a);
    }
  }



$(document).ready(function() { 
    buttonReview();

    $("#search").on("click", function() {
    event.preventDefault();
    console.log("search Button clicked");

    var userInput = $("#location-name-input").val().trim();
    var queryURL = "https://newsapi.org/v2/everything?q=paranormal " + userInput + "&apiKey=c3c56561b15f423f8748a3b782996fd3";   
        console.log(userInput);
        console.log(queryURL);

    //When the AJAX request is copmplete,
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            // <li class="list-group-item"><a href>Cras justo odio</li>
               


            //displays articles in the list
            var results = response.articles;
            for (var i = 0; i < results.length; i++) {
                var listItem = $("<a href target='_blank'></a>", {class:'list-group-item'});
                listItem.text(results[i].title);
                $(listItem).attr("href", results[i].url);
                $(".list-group").append(listItem);
                console.log(listItem.href);
                         
            }
    });
    $("#location-name-input").val(""); //Clears the keyword input field
    $("#article-display").html(""); //Clears the article display

               

    
});
});
