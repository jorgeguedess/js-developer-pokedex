const iconArrow = document.getElementById("iconArrow");
const pokedex = document.getElementById("pokedex");
const card = document.getElementById("card");

function visibleElement(element, oldElement) {
  element.classList.add("active");
  oldElement.classList.remove("active");
}

async function handleFetchPokemon(pokemon) {
  if (!pokemon) return;
  visibleElement(card, pokedex);

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const response = await fetch(url);
  const json = await response.json();
  data = convertPokeApiDetailToPokemon(json);
  console.log(data);
  return await data;
}

iconArrow.addEventListener("click", () => visibleElement(pokedex, card));
