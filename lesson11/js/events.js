const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

let townevents = document.querySelector("#town-name").innerHTML;
let townName = "";

//fill townName var with city
if (townevents == "Preston, Idaho"){
    townName = "Preston";
} else if (townevents == "Fish Haven, Idaho"){
    townName = "Fish Haven";
} else if (townevents == "Soda Springs, Idaho") {
    townName = "Soda Springs";
}

// fetch URL
fetch(requestURL)
.then((response) => response.json())
.then((jsonObject) => {
    let towns = jsonObject['towns'];
  
    
    let currTown = towns.filter(i => (i.name == townName));
    //console.log(currTown);
   

    let ul = document.createElement('ul');


let townEvents = currTown[0].events;
townEvents.forEach(eventDetail => {
    let li = document.createElement("li");
    li.innerHTML = eventDetail;
    ul.appendChild(li);
});

//add content to page
document.querySelector("div.cityevents").appendChild(ul);
});

