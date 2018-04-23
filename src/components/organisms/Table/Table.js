import React from 'react'
import get from 'lodash.get'

import TableItem from '../../molecules/TableItem'
import TablePagination from '../../molecules/TablePagination'

import {
  Row
} from 'reactstrap'

const Table = ({ details, pokemons }) => ([
  <Row key='table'>
    {pokemons.map((pokemon, index) => {
      const image = get(details, `list[${pokemon.name}].front_default`, '')

      return (
        <TableItem
          key={index}
          image={image}
          name={pokemon.name}
        />
      )
    })}
  </Row>,
  <Row key='pagination'>
    <TablePagination />
  </Row>
])

export default Table
