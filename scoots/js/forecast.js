//weathersummary

const currentAPI = `https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;


//forecast
const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;



fetch(currentAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currenttemp').textContent = jsObject.main.temp;
    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });

//forecast


fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    //filter
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    // console.log(forecast);
    let day = 0;
    const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    forecast.forEach(x => {
      const d = new Date(x.dt_txt);
      const desc = x.weather[0].description;
      const image = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
      if (day == 3) { return; }
      document.getElementById(`dayofweek${day + 1}`).textContent = week[d.getDay()];
      document.getElementById(`forecast${day + 1}`).textContent = x.main.temp.toFixed(0) + `°F`;
      document.getElementById(`icon${day + 1}`).setAttribute('src', image);
      document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
      day++;
    })
  });
