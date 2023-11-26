class Pokemon {
  number;
  name;
  type;
  types = [];
  photo;
}

class BaseStats {
  hp;
  attack;
  defense;
  specialAttack;
  specialDefense;
  speed;
}

class PokemonCard extends BaseStats {}
