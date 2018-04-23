import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardImg,
  CardTitle,
  Col
} from 'reactstrap'

const renderImage = image => {
  if (image) {
    return (
      <CardImg width='100%' top src={image} alt='pokemon' />
    )
  }
}

const TableItem = ({ image, name }) =>
  <Col md='3' sm='4' xs='6' className='my-3'>
    <Card>
      {renderImage(image)}
      <CardTitle className='text-center'>
        {name}
      </CardTitle>
    </Card>
  </Col>

TableItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default TableItem
