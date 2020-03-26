
$(document).ready(function () {
    console.log("ready!");
    ///////////////////////////////////////////////////////
    $("#searchButton").on("click", function () {
        event.preventDefault();
        var citySearch = $("#citySearch").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
       // const query2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat={lat}&lon={lon}"
        console.log(citySearch);
        console.log(query1);
        //////ajax call
        $.ajax({
            url: query1,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
                var temperature = (((response.main.temp - 273.15)*1.8)+32).toFixed();
                $("#cityTitle").text(response.name);
                $("#temperature").text("Temperature: " + temperature + " Degrees");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                //$("uv").text("UV Index: " + response.city.coord.lat.toFixed(2));
            });
    });
//////////////////////
});