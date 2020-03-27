var today = moment().format('MMMM Do YYYY');

$(document).ready(function () {
    console.log("ready!");
    ///////////////////////////////////////////////////////
    $("#searchButton").on("click", function () {
        event.preventDefault();
        var citySearch = $("#citySearch").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                $(".icon-image").append($("<img>", {class:"icon-image", src:"https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"}))
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });
    //////////////////// CLICKABLE BUTTONS
    $("#DEN").on("click", function () {
        event.preventDefault();
        var citySearch = $("#DEN").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });

    $("#LA").on("click", function () {
        event.preventDefault();
        var citySearch = $("#LA").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });

    $("#NOLA").on("click", function () {
        event.preventDefault();
        var citySearch = $("#NOLA").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });

    $("#NYC").on("click", function () {
        event.preventDefault();
        var citySearch = $("#NYC").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });

    $("#CHI").on("click", function () {
        event.preventDefault();
        var citySearch = $("#CHI").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });

    $("#DAL").on("click", function () {
        event.preventDefault();
        var citySearch = $("#DAL").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });

    $("#SAN").on("click", function () {
        event.preventDefault();
        var citySearch = $("#SAN").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });
    //////////////////////////
    $("#ATL").on("click", function () {
        event.preventDefault();
        var citySearch = $("#ATL").val().trim();
        const APIKey = "536846aa4d5ff654f203c2a1d2b6526a"
        const query1 = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
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
                $("#temperature").text("Temperature: " + temperature + "° F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                const query2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
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
                const query3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + APIKey;
                $.ajax({
                    url: query3,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
                    $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
                    $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
                    $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
                    $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
                    $(".temp1").text("Temperature " + (((response.list[3].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp2").text("Temperature " + (((response.list[11].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp3").text("Temperature " + (((response.list[19].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp4").text("Temperature " + (((response.list[27].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".temp5").text("Temperature " + (((response.list[35].main.temp - 273.15) * 1.8) + 32).toFixed() + "° F");
                    $(".humidity1").text("Humidity: " + response.list[3].main.humidity + "%");
                    $(".humidity2").text("Humidity: " + response.list[11].main.humidity + "%");
                    $(".humidity3").text("Humidity: " + response.list[19].main.humidity + "%");
                    $(".humidity4").text("Humidity: " + response.list[27].main.humidity + "%");
                    $(".humidity5").text("Humidity: " + response.list[35].main.humidity + "%");
                    $(".icon1").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
                    $(".icon2").empty();
                    $(".icon2").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
                    $(".icon3").empty();
                    $(".icon3").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
                    $(".icon4").empty();
                    $(".icon4").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
                    $(".icon5").empty();
                    $(".icon5").append($("<img>", { class: "icon", src: "https://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
                })
            });
    });
    //////////////////////
});