//function fiveDayWeather() {

    // var lat = JSON.strigify(response.coord.lat);
    // var lon = JSON.strigify(response.coord.lon);

    var oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=28.54&lon=-81.38&units=imperial&exclude=current,minutely,hourly&appid=${key}`;

$.ajax({
    url: oneCallApi,
    method: "Get"
    }).then(function(response) {
        console.log(response);
        JSON.stringify($("#city-weather4").text("UV index: " + response.daily[0].uvi));

        for(var i = 1; i < 6; i++) {
        var date = response.daily[i].dt
        var dailyDate = new Date(date * 1000).toLocaleDateString("en-US");
        $("#date-" + i).text(dailyDate);

        $("#forecast-" + i).empty();
        
        var weatherImg = response.daily[i].weather[0].icon;
        var dailyIcon =
        "https://openweathermap.org/img/wn/" + weatherImg + "@2x.png";
        var img = $("<img>").attr("src", dailyIcon);
        $("#forecast-" + i).append(img);

        JSON.stringify($("#temp-" + i).text("