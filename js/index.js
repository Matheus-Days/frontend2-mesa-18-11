const createPokecard = (pokemon) => {
  fetch(pokemon.url).then(res => res.json()).then(res => {
    const sprite = document.createElement("img");
    sprite.className = "sprite";
    sprite.setAttribute("src", res.sprites["front_default"]);
  
    const name = document.createElement("h3");
    name.className = "name";
    name.innerText = res.name;
  
    const index = document.createElement('div');
    index.className = "index";
    index.innerText = res.id;
  
    const type = document.createElement('div');
    type.className = "type";
    type.innerText = res.types[0].type.name;
  
    const card = document.createElement('div');
    card.className = "card";
  
    card.appendChild(sprite);
    card.appendChild(name);
    card.appendChild(index);
    card.appendChild(type);
  
    document.querySelector("main").appendChild(card);
  })
}

const pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=151";

fetch(pokeapi).then(res => res.json()).then(res => {
  const pokemons = res.results;

  pokemons.forEach(pokemon => {
    createPokecard(pokemon);
  });
})