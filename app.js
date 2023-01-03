let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const errorEl = document.getElementById("error")

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  fetch(FULL_URL)
  .then(response => {
    return response.json()})
  .then(data => {
    console.log(data)
    showWeatherData(data)})
  .catch((error)=>{
    console.log(error);
    console.log("Something happend");
    if(error == "TypeError: Cannot read properties of undefined (reading '0')"){
        errorEl.innerText = "⚠ Enter correct city name ⚠"
    }else if(error == "TypeError: Failed to fetch"){
        errorEl.innerText = " ⚠ NO, internet connection"
    }else{
        alert(error)
    }
    
  })
}

const search = document.getElementById('search')
search.onclick = () =>{
  const value = document.querySelector('#input').value
  getWeatherData(value)
  document.querySelector('#input').value =""
}

showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    const degreeF = weatherData.main.temp;
    document.getElementById("temp-F").innerText = degreeF 
    const degreeC = (Number(degreeF-32))*5/9 
    document.getElementById("temp-C").innerText = parseFloat(degreeC.toFixed(2))


    document.getElementById("humidity").innerText =weatherData.main.humidity
    errorEl.innerText = ""
}   
    
