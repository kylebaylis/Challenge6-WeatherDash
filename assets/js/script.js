var getWeather = function(city) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=53f36a2515b02d34176389d7c4f5de84";

    // get request for url
    fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
  });
}

getWeather("london");




