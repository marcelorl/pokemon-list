import React from 'react'
import PropTypes from 'prop-types'
import {
  Table
} from 'reactstrap'

const renderItems = items =>
  items.map((item, key) =>
    <tr key={key}>
      <td>{item}</td>
    </tr>
  )

const TableInfo = ({ items, title }) =>
  <Table>
    <thead>
      <tr>
        <th>{title}</th>
      </tr>
    </thead>
    <tbody>
      {renderItems(items)}
    </tbody>
  </Table>

TableInfo.defaultProps = {
  items: []
}

TableInfo.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default TableInfo
