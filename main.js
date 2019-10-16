const baseURL = 'https://www.potterapi.com/v1/characters';
const key = '$2a$10$fLQs8owKxlbTZJhMNgwLQ.yFrqXhbwBMtAn5SwnPlgqSaDVI3gzZe';

const sortButton = document.querySelector('button');
const gryffindor = document.getElementById('gryffindor');
const hufflepuff = document.getElementById('hufflepuff');
const ravenclaw = document.getElementById('ravenclaw');
const slytherin = document.getElementById('slytherin');


sortButton.addEventListener('click', fetchDaMembers);

function fetchDaMembers(e) {
    e.preventDefault();

    fetch(`${baseURL}?key=${key}`)
    .then(result => {
        return result.json();
    })
    .then(json => {
        sortDaMembers(json);  
    })
    .catch(err => {
        console.log(err);
    })
}

function sortDaMembers(json) {
    for (let x = 0; x <= 194; x++) {
        let people = json[x];
        if (people.dumbledoresArmy === true) {
            let member = people;
            //console.log(member);
            let house = member.house;
        if (house == 'Gryffindor') {
            let gryffListItem = document.createElement('li');

            gryffListItem.innerText = member.name;
            
            gryffindor.appendChild(gryffListItem);
            } else if (house == 'Hufflepuff') {
                let huffListItem = document.createElement('li');

                huffListItem.innerText = member.name;
            
                hufflepuff.appendChild(huffListItem);
            } else if (house == 'Ravenclaw') {
                let raveListItem = document.createElement('li');

                raveListItem.innerText = member.name;
            
                ravenclaw.appendChild(raveListItem);
            } /*else if ()
            let slythListItem = document.createElement('li');

                slythListItem.innerText = 'Jk lolol';
            
                slytherin.appendChild(slythListItem);*/
        }
    }
}