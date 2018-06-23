var keywords = ["aliens", "paranormal", "ghosts", "bigfoot"];
var queryURL = "https://newsapi.org/v2/top-headlines?country=au&category=" + "science" + "&apiKey=c3c56561b15f423f8748a3b782996fd3";   


    //When the AJAX request is copmplete,
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
    
            
               // <li class="list-group-item">Cras justo odio</li>
               // <li class="list-group-item">Dapibus ac facilisis in</li>
               // <li class="list-group-item">Morbi leo risus</li>
               // <li class="list-group-item">Porta ac consectetur ac</li>
               // <li class="list-group-item">Vestibulum at eros</li>


            var results = response.articles;
            for (var i = 0; i < results.length; i++) {
                var listItem = $("<li>", {class:'list-group-item'});
                listItem.text("Result: " + results[i].title);
                $(".list-group").append(listItem);
                console.log(listItem);


                

             
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
               
    

    //When the AJAX request is copmplete,
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);

        var results = response.articles;
        for (var i = 0; i < results.length; i++) {
            var p = $("<p>").text("ArticleOne: " + articles[i].source);
            $("#p").html("testing" + p);

            var something = $("<div>");
            var article2 = something.attr("src", articles[i].source);

            cuteImage.attr("data-state", "still");

            $("#newsDisplay").append(p, something);
         
          }
          

    });

    
});
});
