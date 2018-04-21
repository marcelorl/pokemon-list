import React from 'react'

import HomeTable from '../../molecules/HomeTable'

const Home = ({ pokemons }) => {
  if (pokemons.loading) return null

  return (
    <HomeTable pokemons={pokemons} />
  )
}

export default Home
