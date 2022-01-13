var apiKey ="cf0342220eede691b1664eda9166fe11"
var cityName ="Philadelphia"
var firstApiName = "https://api.openweathermap.org/data/2.5/weather?q" + cityName +"appid" + apiKey
var btn = document.getElementById ("submitBtn")
var cityInputs=document.getElementById("city-inputs") 
var searchHistory=[cityInputs.value]
//check if api key is working in a few hrs. otherwise ask for help at office hrs
//need another fetch for uvi 
    fetch(firstApiName).then(function(response){
        return response.json()}).then(function (data){
          console.log(data);
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


