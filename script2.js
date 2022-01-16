var apiKey = "cf0342220eede691b1664eda9166fe11"
var cityName = document.getElementById("city-inputs")
var firstApiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.placeholder + "&appid=" + apiKey


function weatherRequest(city_Name){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city_Name + "&appid=" + apiKey
).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    var lat = data.coord.lat
    var lon = data.coord.lon
   
    var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=cf0342220eede691b1664eda9166fe11"
    fetch(oneCall).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data); 
    var temp = document.getElementById("temp")
        temp.textContent+=data.current.temp
    var wind = document.getElementById("wind")
        wind.textContent+=data.current.wind_speed
    var humidity = document.getElementById("humidity")
        humidity.textContent+=data.current.humidity
    var uvi = document.getElementById("uvi")
        uvi.textContent+=data.current.uvi
    var tForecast=document.querySelectorAll("#tForecast")
    var wForecast=document.querySelectorAll("#wForecast")
    var hForecast=document.querySelectorAll("#hForecast")
    console.log(tForecast)
    for (var i =0; i< tForecast.length; i++){
        tForecast[i].textContent += data.daily[i+1].temp.day
        wForecast[i].textContent +=data.daily[i+1].wind_speed
        hForecast[i].textContent +=data.daily[i+1].humidity
    }
    })
});
}
weatherRequest(cityName.placeholder)
var btn = document.getElementById ("submitBtn")
var searchHistory=[cityInputs.value]
//Conversion(0K − 273.15) × 9/5 + 32 = -459.7°F
//loop for forecast which card to which date

btn.addEventListener("click", function(event){
    event.preventDefault()
    var cityInputs=document.getElementById("city-inputs") 
    if (searchHistory.indexOf(cityInputs.value)===-1){
        searchHistory.push(cityInputs.value)
    }
    weatherRequest(cityInputs.value)
})