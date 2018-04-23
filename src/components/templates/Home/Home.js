import React from 'react'

import Table from '../../organisms/Table'

const Home = ({ details, pokemons }) => {
  if (pokemons.loading) return null

  return (
    <Table pokemons={pokemons.list.results} details={details} />
  )
}

export default Home
