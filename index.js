var today = moment().format('MMMM Do YYYY');

$(document).ready(function () {
    console.log("ready!");
    ///////////////////////////////////////////////////////
    $("#searchButton").on("click",function() {
        event.preventDefault();
        var citySearch = $("#citySearch").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
        console.log(citySearch);
        console.log(query1);
        //////ajax call
        $.ajax({
            url: query1,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
                var temperature = (((response.main.temp - 273.15) * 1.8) + 32).toFixed();
                $("#cityTitle").text(response.name + " - " + today);
                $("#temperature").text("Temperature: " + temperature + " Degrees");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
                $.ajax({
                    url: query2,
                    method: "GET"
                }).then(function (response) {
                    var uvIndex = $("#uv");
                    uvIndex.text("UV Index: " + response.value);
                    if (response.value <= 2.99) {
                        uvIndex.attr("class", "btn btn-success");
                    };
                    if (response.value >= 3 && response.value <= 5.99) {
                        uvIndex.attr("class", "btn btn-primary");
                    };
                    if (response.value >= 6 && response.value <= 7.99) {
                        uvIndex.attr("class", "btn btn-warning");
                    };
                    if (response.value >= 8 && response.value <= 10.99) {
                        uvIndex.attr("class", "btn btn-danger");
                    };
                    if (response.value > 11) {
                        uvIndex.attr("class", "btn btn-dark")
                    }
                });
                const query3 = "api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                })
            });
    });
    

    //////////////////////
});