import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    get100Pokemon: builder.query({
      query: (limit = 100) => `pokemon?limit=${limit}`,
    }),
  }),
})

console.log(pokemonApi)

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGet100PokemonQuery } = pokemonApi