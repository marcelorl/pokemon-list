import React from 'react'
import PropTypes from 'prop-types'
import {
  Progress
} from 'reactstrap'

const Stats = ({ items }) =>
  items.map((item, key) =>
    <div key={key}>
      <div className='text-center'>{item.name}</div>
      <Progress value={item.value} />
    </div>
  )

Stats.defaultProps = {
  items: []
}

Stats.propTypes = {
  items: PropTypes.array
}

export default Stats
