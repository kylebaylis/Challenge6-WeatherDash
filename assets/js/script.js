var city = "London"

var apiCallTest = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=53f36a2515b02d34176389d7c4f5de84";

// fetch function for api call
var apiCallFun = function() {
    fetch(apiCallTest).then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
};

apiCallFun();




