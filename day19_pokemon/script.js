// console.log("helllo world!!");
let pokemonCardContainer = document.getElementById("pokemon-card-container");
let searchInput = document.getElementById("serach");
let filterBtn = document.getElementById("filter");


filterBtn.addEventListener("click", function(){
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let pokemonType = card.children[0].children[0].children[3].innerText;
        // console.log(pokemonType);
        if(pokemonType === type.value){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })
})

function createPokemonCard(details) {
//   console.log(details);
  let card = document.createElement("div");
  card.classList.add("card")
  card.innerHTML = `
    <div class="card-inner">
    <div class="card-front">
    <div class="id">${details.id}</div>
    <img src='${details.sprites.front_default}'/>
    <div class="name">${details.name}</div>
    <div class="type">${details.types[0].type.name}</div>
    </div>

    <div claas="back-card">
    <img src='${details.sprites.back_default}'/>
    <div class="name">${details.name}</div>
    <div class="ability">${details.abilities[0].ability.name}
    </div>
    </div>
    `;

    // console.log(card);
    return card;
}

searchInput.addEventListener("input", function(){
    let searchValue = searchInput.value;
    // console.log(searchValue);
    let allCards = document.querySelectorAll(".card");
    // console.log(allCards);
    allCards.forEach(function(card){
        // console.log(card);
        let pokemonName = card.children[0].children[0].children[2].innerText;
        console.log(pokemonName);

        if(pokemonName.startsWith(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })
})


async function fetchPokemon(i) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let result = await data.json();
  return result;
}

async function fetchMaindata() {
  for (let i = 1; i <= 50; i++) {
    let pokemon = await fetchPokemon(i);
    // console.log(pokemon);
    let card = createPokemonCard(pokemon);
    pokemonCardContainer.appendChild(card);
  }
}

fetchMaindata();
