const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    
   
   
    forecast.forEach(x => {
       const d = newDate(forecast.dt_txt);
   }) 
});