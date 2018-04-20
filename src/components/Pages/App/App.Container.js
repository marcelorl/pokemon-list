import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPokemons } from '../../../actions/pokemons'
import App from '../../Templates/App'

class AppContainer extends Component {
  componentDidMount () {
    this.props.fetchPokemons()
  }

  render () {
    return (
      <App {...this.props} />
    )
  }
}

const mapStateToProps = state =>
  (Object.assign({}, {
    question: state.question
  }))

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
