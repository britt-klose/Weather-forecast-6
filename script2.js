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
var cloudyIcon=document.getElementById("cloudy")
var sunnyIcon=document.getElementById("sunny")
var overcastIcon=document.getElementById("overcast")
var rainyIcon=document.getElementById("rain")
var snowIcon=document.getElementById("snow")
//var icon0=document.getElementById("i0")
//var icon1=document.getElementById("i1")
//var icon2=document.getElementById("i2")
//var icon3=document.getElementById("i3")
//var icon4=document.getElementById("i4")
//var icon5=document.getElementById("i5")



function weatherRequest(city_Name){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city_Name + "&appid=" + apiKey
).then(function (response) {
    return response.json()
}).then(function (data) {
    //console.log(data);
    var lat = data.coord.lat
    var lon = data.coord.lon
   
    var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=cf0342220eede691b1664eda9166fe11"
    fetch(oneCall).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data); 
// If statments for current day icons
    if (data.current.weather[0].main==="Clear"){
         $("#i0").html(sunnyIcon)
        }
    if(data.current.weather[0].main==="Rain"){
         $("#i0").html(rainyIcon)
        } 
    if(data.current.weather[0].main==="Clouds"){
         $("#i0").html(cloudyIcon)
        }  
    if(data.current.weather[0].main==="Snow"){
         $("#i0").html(snowIcon)
        }    
// If statements for day 1 icons
    if(data.daily[1].weather[0].main==="Clear"){
         $("#i1").html(sunnyIcon)
        }
     if(data.daily[1].weather[0].main==="Rain"){
         $("#i1").html(rainyIcon)
        }
     if(data.daily[1].weather[0].main==="Clouds"){
         $("#i1").html(cloudyIcon)
        }
     if(data.daily[1].weather[0].main==="Snow"){
         $("#i1").html(snowIcon)
        }
// If statements for day 2 icons
    if(data.daily[2].weather[0].main==="Clear"){
         $("#i2").html(sunnyIcon)
        }
    if(data.daily[2].weather[0].main==="Rain"){
         $("#i2").html(rainyIcon)
        }
    if(data.daily[2].weather[0].main==="Clouds"){
         $("#i2").html(cloudyIcon)
        }
    if(data.daily[2].weather[0].main==="Snow"){
         $("#i2").html(snowIcon)
        }
//If statments for day 3 Icons
    if(data.daily[3].weather[0].main==="Clear"){
         $("#i3").html(sunnyIcon)
        }
    if(data.daily[3].weather[0].main==="Rain"){
         $("#i3").html(rainyIcon)
        }
    if(data.daily[3].weather[0].main==="Clouds"){
         $("#i3").html(cloudyIcon)
        }
    if(data.daily[3].weather[0].main==="Snow"){
         $("#i3").html(snowIcon)
        }
//If statments for day 4 Icons
    if(data.daily[4].weather[0].main==="Clear"){
         $("#i4").html(sunnyIcon)
        }
    if(data.daily[4].weather[0].main==="Rain"){
         $("#i4").html(rainyIcon)
         }
    if(data.daily[4].weather[0].main==="Clouds"){
         $("#i4").html(cloudyIcon)
        }
    if(data.daily[4].weather[0].main==="Snow"){
         $("#i4").html(snowIcon)
        }
//If statments for day 5 Icons
    if(data.daily[5].weather[0].main==="Clear"){
         $("#i5").html(sunnyIcon)
        }
    if(data.daily[5].weather[0].main==="Rain"){
         $("#i5").html(rainyIcon)
        }
    if(data.daily[5].weather[0].main==="Clouds"){
         $("#i5").html(cloudyIcon)
        }
    if(data.daily[5].weather[0].main==="Snow"){
         $("#i5").html(snowIcon)
        }

    var temp = document.getElementById("temp")
        temp.textContent="Temp: " + ((data.current.temp-273.15)*1.8+32).toFixed(2);
    var wind = document.getElementById("wind")
        wind.textContent="Wind: " +data.current.wind_speed
    var humidity = document.getElementById("humidity")
        humidity.textContent="Humidity: " + data.current.humidity
    var uvi = document.getElementById("uvi")
        uvi.textContent="UVI: " + data.current.uvi
        if (data.current.uvi<=2.00){ 
            uvi.setAttribute(
            "style", "background-color: green"
            )
        }else if(data.current.uvi>=5.00){
            uvi.setAttribute(
            "style", "background-color: red" 
            )   
        }else{
            uvi.setAttribute(
            "style", "background-color: yellow"
            )
        }
    var tForecast=document.querySelectorAll("#tForecast")
    var wForecast=document.querySelectorAll("#wForecast")
    var hForecast=document.querySelectorAll("#hForecast")
    console.log(tForecast)
    for (var i =0; i< tForecast.length; i++){
        tForecast[i].textContent="Temp: " + ((data.daily[i+1].temp.day-273.15)*1.8+32).toFixed(2);
        wForecast[i].textContent= "Wind: " + data.daily[i+1].wind_speed;
        hForecast[i].textContent = "Humidity: " + data.daily[i+1].humidity;
    }
    
    })
    cityTitle.textContent=cityInputs.value
    currentDate.textContent=moment().format("L");
    dayOne.textContent=moment().day(1).format("L");
    dayTwo.textContent=moment().day(2).format("L");
    dayThree.textContent=moment().day(3).format("L");
    dayFour.textContent=moment().day(4).format("L");
    dayFive.textContent=moment().day(5).format("L");

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
         //need to change city name at top too
     })
     row.appendChild(column)
     history.appendChild(row)
   }
    weatherRequest(cityInputs.value)
})