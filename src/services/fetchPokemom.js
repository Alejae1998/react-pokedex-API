export async function fetchPokemon() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await response.json();
  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}

export async function fetchPokemonType(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
