//Defined variables
var apiKey = "cf0342220eede691b1664eda9166fe11"
var cityName = document.getElementById("city-inputs")
var firstApiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.placeholder + "&appid=" + apiKey
var cityTitle =document.getElementById("cityTitle")
var cityInputs=document.getElementById("city-inputs") 
var btn = document.getElementById ("submitBtn")
var searchHistory=[]
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
var icon0=document.getElementById("i0")
var icon1=document.getElementById("i1")
var icon2=document.getElementById("i2")
var icon3=document.getElementById("i3")
var icon4=document.getElementById("i4")
var icon5=document.getElementById("i5")

//Function for fetch request: city coordinates and weather data

function weatherRequest(city_Name){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city_Name + "&appid=" + apiKey
).then(function (response) {
    return response.json()
}).then(function (data) {
    var lat = data.coord.lat
    var lon = data.coord.lon
    searchHistory.push(city_Name)
    localStorage.setItem("searchHistory",JSON.stringify(searchHistory))
    

    var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=cf0342220eede691b1664eda9166fe11"
    fetch(oneCall).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);

// If statments for current day icons
    if (data.current.weather[0].main==="Clear"){
         icon0.setAttribute("data-icon","wi:day-sunny")
        }
    else if(data.current.weather[0].main==="Rain"){
         icon0.setAttribute("data-icon","wi:night-rain")
        } 
    else if(data.current.weather[0].main==="Clouds"){
        icon0.setAttribute("data-icon","wi:cloudy")
        }  
    else if(data.current.weather[0].main==="Snow"){
        icon0.setAttribute("data-icon","wi:snow")
        }  
        console.log(data.daily[1].weather[0].main) 

// If statements for day 1 icons
    if(data.daily[1].weather[0].main==="Clear"){
        icon1.setAttribute("data-icon","wi:day-sunny")
        }
    else if(data.daily[1].weather[0].main==="Rain"){
        icon1.setAttribute("data-icon","wi:night-rain")
        }
     else if(data.daily[1].weather[0].main==="Clouds"){
        icon1.setAttribute("data-icon","wi:cloudy")
        }
     else if(data.daily[1].weather[0].main==="Snow"){
        icon1.setAttribute("data-icon","wi:snow")
        }
        console.log(data.daily[2].weather[0].main) 

// If statements for day 2 icons
console.log(icon2)
    if(data.daily[2].weather[0].main==="Clear"){
        icon2.setAttribute("data-icon","wi:day-sunny")
        }
    else if(data.daily[2].weather[0].main==="Rain"){
         icon2.setAttribute("data-icon","wi:night-rain")
        }
    else if(data.daily[2].weather[0].main==="Clouds"){
        icon2.setAttribute("data-icon","wi:cloudy")
        }
    else if(data.daily[2].weather[0].main==="Snow"){
        icon2.setAttribute("data-icon","wi:snow")
        }

//If statments for day 3 Icons
    if(data.daily[3].weather[0].main==="Clear"){
        icon3.setAttribute("data-icon","wi:day-sunny")
        }
    else if(data.daily[3].weather[0].main==="Rain"){
         icon3.setAttribute("data-icon","wi:night-rain")
        }
    else if(data.daily[3].weather[0].main==="Clouds"){
        icon3.setAttribute("data-icon","wi:cloudy")
        }  
    else if(data.daily[3].weather[0].main==="Snow"){
        icon3.setAttribute("data-icon","wi:snow")
        }

//If statments for day 4 Icons
    if(data.daily[4].weather[0].main==="Clear"){
        icon4.setAttribute("data-icon","wi:day-sunny")
        }
    else if(data.daily[4].weather[0].main==="Rain"){
         icon4.setAttribute("data-icon","wi:night-rain")
        }
    else if(data.daily[4].weather[0].main==="Clouds"){
        icon4.setAttribute("data-icon","wi:cloudy")
        }  
    else if(data.daily[4].weather[0].main==="Snow"){
        icon4.setAttribute("data-icon","wi:snow")
        }

//If statments for day 5 Icons
    if(data.daily[5].weather[0].main==="Clear"){
        icon5.setAttribute("data-icon","wi:day-sunny")
        }
    else if(data.daily[5].weather[0].main==="Rain"){
         icon5.setAttribute("data-icon","wi:night-rain")
        }
    else if(data.daily[5].weather[0].main==="Clouds"){
        icon5.setAttribute("data-icon","wi:cloudy")
        }  
    else if(data.daily[5].weather[0].main==="Snow"){
        icon5.setAttribute("data-icon","wi:snow")
        }

// Weather variables for current day
    var temp = document.getElementById("temp")
        temp.textContent="Temp: " + ((data.current.temp-273.15)*1.8+32).toFixed(2);
    var wind = document.getElementById("wind")
        wind.textContent="Wind: " +data.current.wind_speed
    var humidity = document.getElementById("humidity")
        humidity.textContent="Humidity: " + data.current.humidity
    var uvi = document.getElementById("uvi")
        uvi.textContent="UVI: " + data.current.uvi

//If statement to change color of UVI based on severity
        if (data.current.uvi<=2.00){ 
            uvi.setAttribute(
            "style", "background-color: green" //Favorable
            )
        }else if(data.current.uvi>=5.00){
            uvi.setAttribute(
            "style", "background-color: red" //Severe
            )   
        }else{
            uvi.setAttribute(
            "style", "background-color: yellow" //moderate
            )
        }

//Weather vars for forecast days
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
//Displaying picked city name and dates of current and forecasted days
    cityTitle.textContent=city_Name
    currentDate.textContent=moment().format("L");
    dayOne.textContent=moment().day(1).format("L");
    dayTwo.textContent=moment().day(2).format("L");
    dayThree.textContent=moment().day(3).format("L");
    dayFour.textContent=moment().day(4).format("L");
    dayFive.textContent=moment().day(5).format("L");

});
}

//Function to bring data from fetch calls when called
weatherRequest(cityName.placeholder)
var cityInputs=document.getElementById("city-inputs")
var btn = document.getElementById ("submitBtn")
var searchHistory=[cityInputs.value]




//When click on search button bring up the city and all the weather data
btn.addEventListener("click", function(event){
    event.preventDefault()

//Save Search History and display it below each time a new city is added
if (searchHistory.indexOf(cityInputs.value)===-1){
     console.log(searchHistory)
     var history=document.getElementById("history")
     var row =document.createElement("div")
     var column =document.createElement("div")
     column.textContent= cityInputs.value
    
 //When click on previously searched city, bring the data values back
        column.addEventListener("click", function(event){
            event.preventDefault()
            weatherRequest(column.textContent)
            JSON.parse(localStorage.getItem("searchHistory"));
            localStorage.getItem("row");
            localStorage.getItem("column");
        })     
        row.appendChild(column)
        history.appendChild(row)
   }
     weatherRequest(cityInputs.value);
});

//Function to Display Search History
function renderSearchHistory(){
   for (var i = 0; i< searchHistory.length; i++) {
        var searchedCities=JSON.parse(localStorage.getItem("searchHistory"));
        if (searchedCities !==null){
         document.getElementById("history").innerHTML=searchedCities;
        } else{
        return;
        }
   }
}

renderSearchHistory()


       