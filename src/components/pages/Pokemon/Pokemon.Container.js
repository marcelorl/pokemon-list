import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchDetails } from '../../../actions/details'
import Pokemon from '../../templates/Pokemon'

class PokemonContainer extends Component {
  componentDidMount () {
    const { fetchDetails, param } = this.props

    fetchDetails(param, param)
  }

  render () {
    return (
      <Pokemon {...this.props} />
    )
  }
}

const mapStateToProps = ({ details, routing }) => {
  const serializeRoute = routing.location.pathname.split('/').filter(item => item !== '')
  const param = serializeRoute[serializeRoute.length - 1]

  return (Object.assign({}, {
    details,
    param
  }))
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDetails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)
