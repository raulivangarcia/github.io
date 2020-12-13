const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&appid=ddbc2a683be3543c78927678e9fdfbc1&units=imperial`;
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  // console.log(jsObject);
  
  document.getElementById('currenttemp').textContent = jsObject.main.temp;
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
});
