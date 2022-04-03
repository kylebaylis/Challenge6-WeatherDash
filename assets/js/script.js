var citySearch = document.querySelector("#search");
var cityNameInput = document.querySelector("#cityName");

// div id for current weather
var currrentWeather = document.querySelector("#currentWeather");

// div id for search history
var searchHistory = document.querySelector("#searchHist");

// function to enter city name and search
var cityGet = function(event) {
    // to prevent page from refreshing
    event.preventDefault();

    // to get city from input (#cityName)
    var cityName = cityNameInput.value.trim();

    if (cityName) {
        getWeather(cityName);

        // clear old data
        currrentWeather.textContent = "";
        cityNameInput.value = "";
        // creaete p element and store search term in it
        var addToHist = document.createElement("p");
        var innerAddToHist = document.createTextNode(cityName);

        addToHist.appendChild(innerAddToHist);
        document.getElementById("searchHist").appendChild(addToHist);
    }
};

// function to call api
var getWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=53f36a2515b02d34176389d7c4f5de84&units=imperial";

    // get request for url
    fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
        // create header 
        var currentCityHeader = document.createElement("h3");
        currentCityHeader.classList = "currentHeader";
        var currentCityText = document.createTextNode(city.charAt(0).toUpperCase() + city.slice(1));
        currentCityHeader.appendChild(currentCityText);
        document.getElementById("currentWeather").appendChild(currentCityHeader);

        // to create p element and display weather data in current weather section 
        displayWeatherTemp(data.name, data.main.temp);
        var showCurrentWeather = document.createElement("p");
        var toCurrentWeatherTemp = document.createTextNode("Temperature: " + data.main.temp + " °F");
        showCurrentWeather.appendChild(toCurrentWeatherTemp);
        document.getElementById("currentWeather").appendChild(showCurrentWeather);

        displayWeatherHumid(data.main.humidity);
        var showCurrentHumidity = document.createElement("p");
        var toCurrentWeatherHumidity = document.createTextNode("Humidity: " + data.main.humidity + "%");
        showCurrentHumidity.appendChild(toCurrentWeatherHumidity);
        document.getElementById("currentWeather").appendChild(showCurrentHumidity);

        displayWeatherHumid(data.wind.speed);
        var showCurrentWind = document.createElement("p");
        var toCurrentWeatherWind = document.createTextNode("Wind Speed: " + data.wind.speed + " MPH");
        showCurrentWind.appendChild(toCurrentWeatherWind);
        document.getElementById("currentWeather").appendChild(showCurrentWind);
    });
  });
};

// for icon - need to console.log that separately?
// pulls temperature data from api call
var displayWeatherTemp = function(cityProperName, cityData) {
    console.log(cityProperName);
    console.log(cityData);
};

var displayWeatherHumid = function(cityHumid) {
    console.log(cityHumid);
};

var displayWeatherWind = function(cityWind) {
    console.log(cityWind);
};

// search for city on button click, and add search term to search history
citySearch.addEventListener("click", cityGet);
