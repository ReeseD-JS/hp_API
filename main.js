const baseURL = 'https://www.potterapi.com/v1/characters';
const key = '$2a$10$fLQs8owKxlbTZJhMNgwLQ.yFrqXhbwBMtAn5SwnPlgqSaDVI3gzZe';


fetch(`${baseURL}?key=${key}`)
.then(function(response) {
    return response.json();
})
.then(function(json) {
    console.log(json);
    
    for (let x = 0; x <= 194; x++) {
        let people = json[x];
        if (people.dumbledoresArmy === true) {
            let member = people;
            console.log(member);
        }
    }


});

