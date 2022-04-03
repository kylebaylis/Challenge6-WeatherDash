var citySearch = document.querySelector("#search");
var cityNameInput = document.querySelector("#cityName");

var cityGet = function(event) {
    // to prevent page from refreshing
    event.preventDefault();

    // to get city from input (#cityName)
    var cityName = cityNameInput.value.trim();

    if (cityName) {
        getWeather(cityName);
    }
};

// function to call api
var getWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=53f36a2515b02d34176389d7c4f5de84";

    // get request for url
    fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
  });
}

// getWeather("london");
citySearch.addEventListener("click", cityGet);



