import React, { Component } from 'react'
import get from 'lodash.get'
import {
  Col,
  Row
} from 'reactstrap'

import Slider from '../../molecules/Slider'
import Stats from '../../molecules/Stats'

class Pokemon extends Component {
  createImagesCollection (detail) {
    return (
      Object
        .values(get(detail, `images`, []))
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

    const detail = get(details, `list.${param}`, {})

    const images = this.createImagesCollection(detail)
    const stats = get(detail, 'stats', [])

    return ([
      <h2 key='title' className='text-capitalize'>{param}</h2>,
      <Row key='details-1'>
        <Col xs='12' md='5' lg='3'>
          <Slider
            items={images}
          />
        </Col>
        <Col xs='12' md='7' lg='9'>
          <Stats items={stats} />
        </Col>
      </Row>
    ])
  }
}

export default Pokemon
