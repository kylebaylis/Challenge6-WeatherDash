var citySearch = document.querySelector("#search");
var cityNameInput = document.querySelector("#cityName");

var currrentWeather = document.querySelector("#currentWeather");

// div id for current weather
var currentDiv = document.querySelector("#currentWeather");

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
      displayWeather(data.name, data.main.temp);
      // to create p element and display weather data in current weather section
      var showCurrentWeatherTemp = document.createElement("p");
      var toCurrentWeatherTemp = document.createTextNode("Current temperature: " + data.main.temp);

      showCurrentWeatherTemp.appendChild(toCurrentWeatherTemp);
      document.getElementById("currentWeather").appendChild(showCurrentWeatherTemp);
    });
  });
};

// pulls select data from api call
var displayWeather = function(cityProperName, cityData) {
    console.log(cityProperName);
    console.log(cityData);
};

// search for city on button click, and add search term to search history
citySearch.addEventListener("click", cityGet);
