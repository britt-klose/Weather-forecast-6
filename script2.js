var apiKey = "cf0342220eede691b1664eda9166fe11"
var cityName = document.getElementById("city-inputs")
var firstApiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.placeholder + "&appid=" + apiKey
var cityTitle =document.getElementById("cityTitle")
var cityInputs=document.getElementById("city-inputs") 
var btn = document.getElementById ("submitBtn")
var searchHistory=[cityInputs.value]
var currentDate=document.getElementById("date")
var dayOne=document.getElementById("dayOne")
var dayTwo=document.getElementById("dayTwo")
var dayThree=document.getElementById("dayThree")
var dayFour=document.getElementById("dayFour")
var dayFive=document.getElementById("dayFive")

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
        temp.textContent="Temp: " + ((data.current.temp-273.15)*1.8+32).toFixed(2);
    var wind = document.getElementById("wind")
        wind.textContent="Wind: " +data.current.wind_speed
    var humidity = document.getElementById("humidity")
        humidity.textContent="Humidity: " + data.current.humidity
    var uvi = document.getElementById("uvi")
        uvi.textContent="UVI: " + data.daily[0].uvi
    var tForecast=document.querySelectorAll("#tForecast")
    var wForecast=document.querySelectorAll("#wForecast")
    var hForecast=document.querySelectorAll("#hForecast")
    console.log(tForecast)
    for (var i =0; i< tForecast.length; i++){
        tForecast[i].textContent="Temp: " + ((data.daily[i+1].temp.day-273.15)*1.8+32).toFixed(2);
        wForecast[i].textContent= "Wind: " + data.daily[i+1].wind_speed;
        hForecast[i].textContent = "Humidity: " + data.daily[i+1].humidity;
    }
    cityTitle.textContent=cityInputs.value
    currentDate.textContent=moment().format("L");
    dayOne.textContent=moment().day(1).format("L");
    dayTwo.textContent=moment().day(2).format("L");
    dayThree.textContent=moment().day(3).format("L");
    dayFour.textContent=moment().day(4).format("L");
    dayFive.textContent=moment().day(5).format("L");
    })
});
}
weatherRequest(cityName.placeholder)
var cityInputs=document.getElementById("city-inputs") 
var btn = document.getElementById ("submitBtn")
var searchHistory=[cityInputs.value]
//Conversion(0K − 273.15) × 9/5 + 32 = -459.7°F
//loop for forecast which card to which date

btn.addEventListener("click", function(event){
    event.preventDefault()
if (searchHistory.indexOf(cityInputs.value)===-1){
    searchHistory.push(cityInputs.value)
     console.log(searchHistory)
     var history=document.getElementById("history")
     var row=document.createElement("div")
     var column=document.createElement("div")
     column.textContent=cityInputs.value
     column.addEventListener("click", function(event){
         event.preventDefault()
         weatherRequest(column.textContent)
         //cityTitle.textContent=data.name
         //need to change city name at top too
     })
     row.appendChild(column)
     history.appendChild(row)
   }
    weatherRequest(cityInputs.value)
})