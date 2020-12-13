const pricesAPI = `https://github.com/raulivangarcia/raulivangarcia.github.io/blob/master/scoots/json/rental.json`;


//prices


fetch(pricesAPI)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
     
    jsObject.forEach(x => {
             
      document.getElementById(`dayofweek${day+1}`).textContent = week[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0) + `°F`;
      document.getElementById(`icon${day+ 1}`).setAttribute('src', image);
      document.getElementById(`icon${day+ 1}`).setAttribute('alt', desc);
      day++;
       }) 
});
