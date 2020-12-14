const pricesAPI = `https://github.com/raulivangarcia/raulivangarcia.github.io/blob/master/scoots/json/rental.json`;


//prices


fetch(pricesAPI)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
     
    jsObject.forEach(x => {
             
      document.getElementById(`max${+1}`).textContent = x.rental.maxpersons;
      document.getElementById(`rhalfday${+1}`).textContent = x.rental.rhalfday;
      document.getElementById(`rfullday${+1}`).textContent = x.rental.rfullday;
      document.getElementById(`halfday${+1}`).textContent = x.rental.halfday;
      document.getElementById(`fullday${+1}`).textContent = x.rental.fullfday;
       }) 
});
