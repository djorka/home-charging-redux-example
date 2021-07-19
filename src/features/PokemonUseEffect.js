import { useEffect, useState } from 'react';

export default function PokemonUseEffect() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
      const data = await response.json();
      setTimeout(() => setPokemon(data.results), 1000)
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Pokemon useEffect</h1>
      {pokemon.length ? (
        <ol type="1">
          {pokemon.map((poke) => <li key={poke.name}>{poke.name}</li>)}
        </ol>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
