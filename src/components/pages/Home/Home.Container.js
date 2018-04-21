import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPokemons } from '../../../actions/pokemons'
import Home from '../../templates/Home'

class HomeContainer extends Component {
  componentDidMount () {
    this.props.fetchPokemons()
  }

  render () {
    return (
      <Home {...this.props} />
    )
  }
}

const mapStateToProps = state =>
  (Object.assign({}, {
    pokemons: state.pokemons
  }))

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
