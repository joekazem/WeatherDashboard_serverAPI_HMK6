// api key open weather map
const key = "39ce06798e8547b26b3493c8a7b2b944";
//API endpoint url
const url = "https://api.openweathermap.org";


var searchBtn = document.querySelector('.btn')
searchBtn.addEventListener('click', setQuery);

function setQuery() {
    const searchBox = document.querySelector('#search-box').value;
    // API call url
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBox + "&units=imperial&APPID=39ce06798e8547b26b3493c8a7b2b944";
    $.ajax({
        url: queryUrl,
        method: "GET",
        success: function (response) {
            $("#temp").text(response.main.temp)
            $("#humid").text("Humidity: " + response.main.humidity + "%")
            $("#wind").text("Wind Speed: " + response.wind.speed + "Mph") //append to the html document
             $("#pressure").text(response.main.pressure + "Hg")
            //var uv1 = $("<h3>")
            console.log(response.coord);
            console.log(response.weather[0].description);
            fiveDay(response.coord.lat, response.coord.lon);
        }
    })

    //save the city searching for in local storage

    //call function that creates the html for the saved cities
    //   if (evt.keycode == 13) {
    //      getResults(searchBox.value);
    //    console.log(searchBox.value);
    // }
}

function fiveDay(lat, lon) {
    const fiveDayApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly&units=imperial&appid=39ce06798e8547b26b3493c8a7b2b944';
    var fiveDayData = []
    $.ajax({
        url: fiveDayApi,
        method: "GET",
        success: function (data) {
            console.log(data.daily[0].temp.day);
            for (let i = 1; i < 6; i++) {
                console.log("data", data.daily);
                fiveDayData.push(data.daily[i])
                $(`#date${i}`).text(data.daily[i].dt)
                $(`#temp${i}`).text(data.daily[i].temp.max)
                 $(`#humidity${i}`).text(data.daily[i].humidity)
                 $(`#press${i}`).text(data.daily[i].pressure)
                $(`#uv${i}`).text(data.daily[i].uvi)
            }
             
            return data
 
        },
        error: function (err) {
            console.log(err);
        }
       

    })
}