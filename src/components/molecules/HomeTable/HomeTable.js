import React from 'react'

import {
  Card,
  // CardImg,
  CardTitle,
  Row
} from 'reactstrap'

const HomeTable = props =>
  <Row>
    {props.pokemons.list.results.map((pokemon, index) => {
      return (
        <Card key={index}>
          {/* <CardImg /> */}
          <CardTitle>
            {pokemon.name}
          </CardTitle>
        </Card>
      )
    })}
  </Row>

export default HomeTable
