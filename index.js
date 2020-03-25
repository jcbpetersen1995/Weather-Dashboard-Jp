

$( document ).ready(function() {
    console.log( "ready!" );
///////////////////////////////////////////////////////
$("#searchButton").on("click", function() {
    event.preventDefault();
    var citySearch = $("#citySearch").val().trim();
    const APIKey = "adadf6b95c603c845d08323eaa0bc6ea"
    const query1 = "api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
    console.log(citySearch);
    console.log(query1)
    //////ajax call
        $.ajax({
        url: query1,
        method: "GET"
      }).then(function(response) {
          $("#cityTitle").text(response.name)
      }
)});

});