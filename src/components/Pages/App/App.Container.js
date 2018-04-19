import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchList } from '../../../actions/list'
import App from '../../Templates/App'

class AppContainer extends Component {
  componentDidMount () {
    this.props.fetchList()
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
  fetchList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
