import React, { Component } from 'react'
import get from 'lodash.get'
import {
  Row
} from 'reactstrap'

import TableItem from '../../molecules/TableItem'
import TablePagination from '../../molecules/TablePagination'

class Table extends Component {
  constructor () {
    super()

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  prev () {
    this.props.fetchPokemons(this.props.pokemons.previous)
  }

  next () {
    this.props.fetchPokemons(this.props.pokemons.next)
  }

  render () {
    const { details, pokemons } = this.props
    const list = get(pokemons, 'results', [])

    return ([
      <Row key='table'>
        {list.map((pokemon, index) => {
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
      <Row key='pagination' className='d-flex align-content-center justify-content-center'>
        <TablePagination next={this.next} prev={this.prev} />
      </Row>
    ])
  }
}

export default Table
