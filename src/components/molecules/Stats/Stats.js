import React from 'react'
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

export default Stats
