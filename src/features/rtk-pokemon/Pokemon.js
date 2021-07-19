import { useGet100PokemonQuery } from './pokemonApi';

export default function Pokemon() {
  const { data, error, isLoading, refetch, isFetching } = useGet100PokemonQuery();

  console.log({ isLoading, isFetching });

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  const pokemon = data.results;

  return (
    <>
      <button type="button" onClick={refetch}>
        re-fetch
      </button>
      <ol type="1">
        {pokemon.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ol>
    </>
  );
}
