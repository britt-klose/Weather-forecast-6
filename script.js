var apiKey ="cf0342220eede691b1664eda9166fe11"
var cityName=document.getElementById("cityName")
//var firstApiName ="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=cf0342220eede691b1664eda9166fe11"
//var firstApiName = "https://api.openweathermap.org/data/2.5/weather?q" + cityName + "&appid=" + apiKey
var firstApiName = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
var btn = document.getElementById ("submitBtn")
var cityInputs=document.getElementById("city-inputs") 
var searchHistory=[cityInputs.value]
var temp=document.getElementById("temp")
var wind= document.getElementById("wind")
var humidity= document.getElementById("humidity")
var uvi= document.getElementById("uvi")
var currentDate = moment().format("dddd, MMMM Do YYYY")
console.log(currentDate)
//var dayOne
//var dayTwo
//var dayThree
//var dayFour
//var dayFive
var tempForecast=document.getElementById("tforecast")
var windForecast= document.getElementById("wforecast")
var humidityForecast= document.getElementById("hforecast")
//var secondApi=
//need another fetch for uvi 

    fetch(firstApiName).then(function(response){
        return response.json()}).then(function (data){
          console.log(data);
          displayWeather(data);
        });

btn.addEventListener("click", function(event){
    event.preventDefault()
    if (searchHistory.indexOf(cityInputs.value)===-1){
        searchHistory.push(cityInputs.value)
    }
    //if response array index tripple = -1 then push to array
    //when hit button push array so this valueis added to search history array
    //have to stringify when adding and parse when leaving?
console.log(searchHistory)
})

function displayWeather(weatherCurrent){
    cityInputs.innerHTML=search.value + " " + currentDate
}

var tempPresent=(weatherCurrent.current.temp).toFixed(2);
temp.innerHTML="Temp: " + tempPresent

//function for local storage to save search history
//function saveLastSearch(){
  //  var userSearch={
    //    city:cityInputs.value})
      //  localStorage.setitem
    //}
//}