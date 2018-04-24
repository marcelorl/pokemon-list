import React, { Component } from 'react'
import get from 'lodash.get'
import {
  Col
} from 'reactstrap'

import Slider from '../../molecules/Slider'

class Pokemon extends Component {
  createImagesCollection () {
    const { details, param } = this.props

    return (
      Object
        .values(get(details, `list.${param}.images`, []))
        .filter(item => item !== '')
        .map(src => ({
          src,
          altText: ''
        }))
    )
  }

  render () {
    const { details, param } = this.props

    if (details.loading) return null

    const images = this.createImagesCollection(details)

    return ([
      <h2 key='title' className='text-capitalize'>{param}</h2>,
      <Col key='slider' xs='12' lg='3'>
        <Slider
          items={images}
        />
      </Col>
    ])
  }
}

export default Pokemon
