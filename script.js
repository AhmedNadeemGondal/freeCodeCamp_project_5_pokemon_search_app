const search = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const imgContainer = document.getElementById("img-container");

const callUrl = (name) => {
  const baseUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
  const requestUrl = baseUrl.concat(`/${name}`);

  return fetch(requestUrl) // Return the fetch promise
    .then((response) => {
      if (response.status === 200) {
        return response.json(); // Return the parsed data
      } else {
        alert("Pokémon not found");
        return null; // Return null if not found
      }
    })
    .catch((error) => console.error(error));
};

search.addEventListener("click", () => {
  const input = document.getElementById("search-input").value.toLowerCase();
  console.log(input);
  callUrl(input).then((data) => {
    if (data) {
      console.log(data); // Process the data here if it's valid
      console.log(data.name);
      console.log(data.id);
      update(data);
    }
  });
});

const update = (data) => {
  // pokemonName.innerText = data.name;
  pokemonName.innerText = data.name[0].toUpperCase() + data.name.slice(1);
  pokemonId.innerText = data.id;
  weight.innerText = data.weight;
  height.innerText = data.height;

  types.innerHTML = `${data.types
    .map(
      (type) =>
        `<span>${
          type.type.name[0].toUpperCase() + type.type.name.slice(1)
        }</span>`
    )
    .join(" ")}`;

  hp.innerText = data.stats.find((stat) => stat.stat.name === "hp").base_stat;
  attack.innerText = data.stats.find(
    (stat) => stat.stat.name === "attack"
  ).base_stat;
  defense.innerText = data.stats.find(
    (stat) => stat.stat.name === "defense"
  ).base_stat;
  specialAttack.innerText = data.stats.find(
    (stat) => stat.stat.name === "special-attack"
  ).base_stat;
  specialDefense.innerText = data.stats.find(
    (stat) => stat.stat.name === "special-defense"
  ).base_stat;
  speed.innerText = data.stats.find(
    (stat) => stat.stat.name === "speed"
  ).base_stat;
  imgContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} sprite">`;
};
