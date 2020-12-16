// const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=current,minutely,hourly,daily&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial';
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=64.8378&lon=-147.716&exclude=current,minutely,hourly,daily&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial';



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    if (jsObject.alerts && jsObject.alerts.length > 0) {
      document.getElementById('message').textContent = jsObject.alerts[0].description;
      
    }
  
});
