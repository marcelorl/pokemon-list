import React from 'react'

import Table from '../../organisms/Table'

const Home = ({ details, fetchPokemons, pokemons }) => {
  if (pokemons.loading) return null

  return (
    <Table details={details} fetchPokemons={fetchPokemons} pokemons={pokemons.list} />
  )
}

export default Home
