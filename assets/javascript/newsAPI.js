var keywords = ["aliens", "paranormal", "ghosts", "bigfoot"];
var queryURL = "https://newsapi.org/v2/top-headlines?country=au&category=" + "science" + "&apiKey=c3c56561b15f423f8748a3b782996fd3";   


    //When the AJAX request is copmplete,
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
    
            
               // <li class="list-group-item"><a href>Cras justo odio</li>
               



            var results = response.articles;
            for (var i = 0; i < results.length; i++) {
                var listItem = $("<a href></a>", {class:'list-group-item'});
                listItem.text(results[i].title);
                $(listItem).attr("href", results[i].url);
                $(".list-group").append(listItem);
                console.log(listItem.href);


                

             
              }
              
    
        });

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

    


    $("body").on("click", "button", function() { 
               
    console.log("searching something");

    
});
});
