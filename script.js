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
        $("#humid").text("Humidity " + response.main.humidity + "%")
        $("#wind").text("wind Speed " + response.wind.speed + "Mph") //append to the html document
        //var uv1 = $("<h3>")
        console.log(response);
        console.log(response.weather[0].description);
    }
    })

    //save the city searching for in local storage

    //call function that creates the html for the saved cities
    if (evt.keycode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
  
}

function fiveDayForecast () {
    const searchBox = document.querySelector('#search-box').value;
    const fiveDayApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchBox + "&appid=39ce06798e8547b26b3493c8a7b2b944";
    console.log(fiveDayApi);
    $.ajax({
            url: fiveDayApi,
            method: "GET",
            success: function (data) {
                console.log (data);
            },
            error: function (err) {
                console.log (err);
            }
            
    })
       
}
    fiveDayForecast ();  