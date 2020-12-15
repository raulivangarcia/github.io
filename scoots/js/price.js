const pricesAPI = `./json/rental.json`;


//prices


fetch(pricesAPI)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
     
    jsObject.rental.forEach((x, i) => {
             
      document.getElementById(`max${i}`).textContent = x.maxpersons;
      document.getElementById(`rhalfday${i}`).textContent = x.rhalfday;
      document.getElementById(`rfullday${i}`).textContent = x.rfullday;
      document.getElementById(`halfday${i}`).textContent = x.halfday;
      document.getElementById(`fullday${i}`).textContent = x.fullday;
       }) 
});
