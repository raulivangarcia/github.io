//weathersummary

const prestonweather = `https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;

const fishhavenweather = `https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;

const sodaspringsweather = `https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;

//forecast
const prestonforecast = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;

const fishhavenforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;

const sodaspringsforecast = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;

let town = document.querySelector("#town-name").innerHTML;
let currentAPI = "";
let forecastAPI = "";

if (town == "Fish Haven, Idaho") {
  currentAPI = fishhavenweather;
  forecastAPI = fishhavenforecast;
} else if (town == "Preston, Idaho") {
  currentAPI = prestonweather;
  forecastAPI = prestonforecast;
} else if (town == "Soda Springs, Idaho") {
  currentAPI = sodaspringsweather;
  forecastAPI = sodaspringsforecast;
};

fetch(currentAPI)
.then((response) => response.json())
.then((jsObject) => {
  //console.log(jsObject);
  
  document.getElementById('currenttemp').textContent = jsObject.main.temp;
  document.getElementById('condition').textContent = jsObject.weather[0].main;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('windspeed').textContent = jsObject.wind.speed;

 // wind chill

  let t = parseFloat(document.querySelector("#currenttemp").textContent);
  let s = parseFloat(document.querySelector("#windspeed").textContent);
  let output;
  if (t <= 50 && s >= 3) {
    let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * (t *(Math.pow(s, .16))));
    output = Math.round(f);
}
else {
    output = "N/A"
}
document.getElementById("windchill").innerHTML = output


});

//forecast


fetch(forecastAPI)
.then((response) => response.json())
.then((jsObject) => {
  //console.log(jsObject);
//filter
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    //console.log(forecast);
    let day = 0;
    const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
     
    forecast.forEach(x => {
       const d = new Date(x.dt_txt);
       const desc = x.weather[0].description;
       const image = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
      document.getElementById(`dayofweek${day+1}`).textContent = week[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0) + `°F`;
      document.getElementById(`icon${day+ 1}`).setAttribute('src', image);
      document.getElementById(`icon${day+ 1}`).setAttribute('alt', desc);
      day++;
       }) 
});
