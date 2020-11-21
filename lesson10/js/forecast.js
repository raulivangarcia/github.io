//weathersummary

const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('currenttemp').textContent = jsObject.main.temp;
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
});

//forecast
const forecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial";

fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    
    const day = ;
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
   
   
    forecast.forEach(x => {
       const d = new Date(forecast.dt_txt);
       document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
       document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
       day++;
       }) 
});