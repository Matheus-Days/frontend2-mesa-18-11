const createPokecards = (pokemons = []) => {
  
  pokemons.forEach(pokemon => {
    
    const index = document.createElement('div');
    index.className = "index";

    const sprite = document.createElement("img");
    sprite.className = "sprite";
  
    const name = document.createElement("h3");
    name.className = "name";
    let pokename = pokemon.name[0].toUpperCase()+pokemon.name.substring(1);
    name.innerText = pokename;

    const type = document.createElement('div');
    type.className = "type";
  
    const card = document.createElement('div');
    card.className = "card";
    card.setAttribute("data-src", pokemon.url);
  
    card.appendChild(index);
    card.appendChild(sprite);
    card.appendChild(name);
    card.appendChild(type);
  
    document.querySelector("main").appendChild(card);
  })
} 

const generatePokedex = () => {
  const pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=151";
  
  fetch(pokeapi).then(res => res.json()).then(res => {
    const pokemons = res.results;
  
    createPokecards(pokemons);
  }).then(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      fillPokecard(card);
    });
  })
}

generatePokedex();

const fillPokecard = (pokecard) => {
  const url = pokecard.getAttribute('data-src');

  const index = pokecard.querySelector('.index');
  const sprite = pokecard.querySelector('.sprite');
  const type = pokecard.querySelector('.type');
  
  fetch(url).then(res => res.json()).then(res => {

    index.innerText = res.id;
    
    sprite.setAttribute("src", res.sprites["front_default"]);
  
    const typeName = res.types[0].type.name;
    type.innerText = typeName.toUpperCase();
    type.classList.add(typeName);
  })
}