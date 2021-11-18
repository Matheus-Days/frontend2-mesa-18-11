const createPokecard = (pokemon) => {
  fetch(pokemon.url).then(res => res.json()).then(res => {
    const sprite = document.createElement("img");
    sprite.className = "sprite";
    sprite.setAttribute("src", res.sprites["front_default"]);
  
    const name = document.createElement("h3");
    name.className = "name";
    let pokename = res.name[0].toUpperCase()+res.name.substring(1);
    name.innerText = pokename;

  
    const index = document.createElement('div');
    index.className = "index";
    index.innerText = res.id;
  
    const type = document.createElement('div');
    type.className = "type";
    type.innerText = res.types[0].type.name.toUpperCase();
  
    const card = document.createElement('div');
    card.className = "card";
  
    card.appendChild(index);
    card.appendChild(sprite);
    card.appendChild(name);
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