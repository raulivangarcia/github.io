//weathersummary

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('currenttemp').textContent = jsObject.main.temp;
  document.getElementById('condition').textContent = jsObject.weather[0].main;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('windspeed').textContent = jsObject.wind.speed;
  //document.getElementById('windchill').innerHTML = windchill();
});

//forecast
const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial";

fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
//filter
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    let day = 0;
    const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    
     
    forecast.forEach(x => {
       const d = new Date(x.dt_txt);
       const desc = x.weather[0].description;
       const image = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
      document.getElementById(`dayofweek${day+1}`).textContent = week[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0);
      document.getElementById(`icon${day+ 1}`).setAttribute('src', image);
      document.getElementById(`icon${day+ 1}`).setAttribute('alt', desc);
      day++;

      





      // document.getElementById(`temp${days+ 1}`).innerHTML = `${forecast.main.temp.toFixed(0)}`;
      //document.getElementById(`day${days+ 1}`).textContent = week[d.getDay()];
      // document.getElementById(`icon${days+ 1}`).setAttribute('src', imgage);
      // document.getElementById(`icon${days+ 1}`).setAttribute('alt', desc);
      // days++;
       }) 
});
