const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const idaho = towns.filter(town => (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'))
        idaho.forEach(town => {
            let card = document.createElement('section');
            let data = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            //add details and attributes            
            h2.innerHTML = `${town.name}`;
            h3.innerHTML = `${town.motto}`;
            year.innerHTML = `Founded: ${town.yearFounded}`;
            pop.innerHTML = `Population: ${town.currentPopulation}`;
            rain.innerHTML = `Average Rainfall: ${town.averageRainfall}`;
            image.setAttribute('src', `images/${town.photo}`);
            image.setAttribute('alt', `Picture of ${town.name}`);
            //actually add the content to the container
            
            card.appendChild(data);
            data.appendChild(h2);
            data.appendChild(h3);
            data.appendChild(year);
            data.appendChild(pop);
            data.appendChild(rain);         
            card.appendChild(image);

            document.querySelector('.towndata').appendChild(card);
        });

    });