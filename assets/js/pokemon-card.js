const containerMenu = document.getElementById("containerMenu");
const attribute = document.querySelector(".menu-attributes li");
const mainPokemon = document.getElementById("mainPokemon");

function convertPokemonToHtmlMain(pokemon) {
  return `
        <main class="container pokemon fire">
        <header class="menu">
        <i class="fa-solid fa-arrow-left arrow" id="iconArrow"></i>
        <i class="fa-regular fa-heart heart"></i>
        </header>
        <h1 class="name">Charmander</h1>
        <span class="number">#004</span>

        <div class="detail">
        <ol class="types">
            <li class="type fire">fire</li>
        </ol>

        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
            alt="Charmander"
        />
        </div>
    </main>
    `;
}

function convertPokemonToHtmlAbout(pokemon) {
  return `
        <div id="about">
        <div class="info">
            <p>Species</p>
            <span>Seed</span>
        </div>
        <div class="info">
            <p>Height</p>
            <span>2'3.6* (0,70 cm)</span>
        </div>
        <div class="info">
            <p>Weight</p>
            <span>15.2 lbs (6.9 kg)</span>
        </div>
        <div class="info">
            <p>Abilities</p>
            <span>Overgrow, Chlorophyl</span>
        </div>
        <h2 class="subtitle">Breeding</h2>
        <div class="info">
            <p>Gender</p>
            <div class="gender-container">
            <div class="gender">
                <i class="fa-solid fa-mars" style="color: #8591e1"></i>
                87.5%
            </div>
            <div class="gender">
                <i class="fa-solid fa-mercury" style="color: #f28bb0"></i>
                12.5%
            </div>
            </div>
        </div>
        <div class="info">
            <p>Egg Groups</p>
            <span>Monster</span>
        </div>
        <div class="info">
            <p>Egg Cycle</p>
            <span>Grass</span>
        </div>
        </div>
      `;
}

function convertPokemonToHtmlBase(pokemon) {
  return `
        <div id="base">
        <div class="status essential">
        <p>HP</p>
        <div class="power">
            <span>45</span>
            <div class="bar" style="width: 45%"></div>
        </div>
        </div>

        <div class="status">
        <p>Attack</p>
        <div class="power">
            <span>60</span>
            <div class="bar" style="width: 60%"></div>
        </div>
        </div>

        <div class="status essential">
        <p>Defense</p>
        <div class="power">
            <span>48</span>
            <div class="bar" style="width: 48%"></div>
        </div>
        </div>

        <div class="status">
        <p>Sp. Atk</p>
        <div class="power">
            <span>65</span>
            <div class="bar" style="width: 65%"></div>
        </div>
        </div>

        <div class="status">
        <p>Sp. Def</p>
        <div class="power">
            <span>65</span>
            <div class="bar" style="width: 65%"></div>
        </div>
        </div>

        <div class="status essential">
        <p>Speed</p>
        <div class="power">
            <span>45</span>
            <div class="bar" style="width: 45%"></div>
        </div>
        </div>

        <div class="status">
        <p>Total</p>
        <div class="power">
            <span>317</span>
            <div class="bar" style="width: 50%"></div>
        </div>
        </div>

        <h2 class="subtitle">Type defenses</h2>
        <p class="desc">The effectiveness of each type on Charmander.</p>
    </div>
    `;
}

function convertPokemonToHtmlMaintenance() {
  return `
    <p class="maintenance">Página em manutenção...</p>
    `;
}

function activeMenuPokemon(element) {
  const elems = document.querySelectorAll("#card .active");
  elems.forEach((element) => {
    element.classList.remove("active");
  });
  element.classList.add("active");
}

let oldElementText = "";

function loadPokemonDetails(element, fn) {
  activeMenuPokemon(element);

  const elementText = element.innerText;
  if (elementText === oldElementText) return;

  oldElementText = elementText;
  containerMenu.innerHTML = fn();
}

mainPokemon.innerHTML += convertPokemonToHtmlMain();

const menuAbout = document.querySelector(`[data-attribute="about"]`);
const menuBase = document.querySelector(`[data-attribute="base"]`);
const menuEvolution = document.querySelector(`[data-attribute="evolution"]`);
const menuMoves = document.querySelector(`[data-attribute="moves"]`);

loadPokemonDetails(menuAbout, convertPokemonToHtmlAbout);

menuAbout.addEventListener("click", () =>
  loadPokemonDetails(menuAbout, convertPokemonToHtmlAbout)
);

menuBase.addEventListener("click", () =>
  loadPokemonDetails(menuBase, convertPokemonToHtmlBase)
);

menuEvolution.addEventListener("click", () =>
  loadPokemonDetails(menuEvolution, convertPokemonToHtmlMaintenance)
);

menuMoves.addEventListener("click", () =>
  loadPokemonDetails(menuMoves, convertPokemonToHtmlMaintenance)
);
