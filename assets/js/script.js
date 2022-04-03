var city = document.querySelector("cityName");

var searchFun = document.getElementById("search");

// fetch function for api call to get Coordinates
var apiCallFun = function() {

    var apiCallTest = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=53f36a2515b02d34176389d7c4f5de84";

    fetch(apiCallTest).then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
};

searchFun.addEventListener("click", apiCallFun());




