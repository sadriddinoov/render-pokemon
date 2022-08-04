let elTemplate = document.querySelector("#template").content;
let elWrapper = document.querySelector(".wrapper");
let elBtn = document.querySelector(".button");
let elBody = document.querySelector("#mainBody");

let newMovies = pokemons;

let normolizedArray = newMovies.map(function (item) {
   return {
    img: item.img,
    name: item.name,
    height: item.height,
    weight: item.weight,
    type: item.type
   }
})

// id: 3,
// 		num: '003',
// 		name: 'Venusaur',
// 		img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
// 		type: ['Grass', 'Poison'],
// 		height: '2.01 m',
// 		weight: '100.0 kg',
// 		candy: 'Bulbasaur Candy',
// 		egg: 'Not in Eggs',
// 		spawn_chance: 0.017,
// 		avg_spawns: 1.7,
// 		spawn_time: '11:30',
// 		multipliers: null,
// 		weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],

function render(array) {

    let elFragment = document.createDocumentFragment();

    let newUL = document.createElement("ul");
    for (const item of array) {

        let pokemonCard = elTemplate.cloneNode(true);

        let newLI = document.createElement("li");

        newLI.classList = "elitem";

        newUL.classList = "elList"

        pokemonCard.querySelector(".render_img").src = item.img;

        pokemonCard.querySelector(".render_heading").textContent =  item.name;

        pokemonCard.querySelector(".render_weight").textContent = item.weight;

        pokemonCard.querySelector(".render_height").textContent = item.height;

        pokemonCard.querySelector(".render_type").textContent = item.type;

        elFragment.appendChild(pokemonCard);

        newLI.appendChild(elFragment);

        newUL.appendChild(newLI)
    }

    elWrapper.appendChild(newUL)
}



elBtn.addEventListener("click", function (evt) {
    
    render(normolizedArray)

    elBody.classList.toggle("bg");
})