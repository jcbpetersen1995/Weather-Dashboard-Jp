var today = moment().format('MMMM Do YYYY');

$("#DEN").on("click", function() {
    event.preventDefault();
    var citySearch = $("#DEN").val().trim();
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
            })
        });
});

$("#LA").on("click", function() {
    event.preventDefault();
    var citySearch = $("#LA").val().trim();
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
            })
        });
});

$("#NOLA").on("click", function() {
    event.preventDefault();
    var citySearch = $("#NOLA").val().trim();
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
            })
        });
});

$("#NYC").on("click", function() {
    event.preventDefault();
    var citySearch = $("#NYC").val().trim();
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
            })
        });
});

$("#CHI").on("click", function() {
    event.preventDefault();
    var citySearch = $("#CHI").val().trim();
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
            })
        });
});

$("#DAL").on("click", function() {
    event.preventDefault();
    var citySearch = $("#DAL").val().trim();
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
            })
        });
});

$("#SAN").on("click", function() {
    event.preventDefault();
    var citySearch = $("#SAN").val().trim();
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
            })
        });
});

$("#ATL").on("click", function() {
    event.preventDefault();
    var citySearch = $("#ATL").val().trim();
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
            })
        });
});