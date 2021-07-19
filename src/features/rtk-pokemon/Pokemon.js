import { useGet100PokemonQuery } from './pokemonApi';

export default function Pokemon() {
  const { data, error, isLoading } = useGet100PokemonQuery();

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  const pokemon = data.results;

  return (
    <>
      <ol type="1">
        {pokemon.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ol>
    </>
  );
}
