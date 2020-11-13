const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let bp = document.createElement('p')
            let image = document.createElement('img');

            //add details and attributes            
            h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
            p.innerHTML = `Birth Date: ${prophet.birthdate}`;
            bp.innerHTML = `Birth Place: ${prophet.birthplace}`;
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', `Picture of ${prophet.name} ${prophet.lastname}`);
            //actually add the content to the container
            
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(bp);
            card.appendChild(image);

            document.querySelector('.cards').appendChild(card);
        });

    });
