import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

class TablePagination extends Component {
  constructor (props) {
    super(props)

    this.onClickNext = this.onClickNext.bind(this)
    this.onClickPrev = this.onClickPrev.bind(this)
  }

  onClickNext (e) {
    e.preventDefault()

    this.props.next()
  }

  onClickPrev (e) {
    e.preventDefault()

    this.props.prev()
  }

  render () {
    return (
      <Pagination size='lg'>
        <PaginationItem>
          <PaginationLink previous onClick={this.onClickPrev} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={this.onClickNext} />
        </PaginationItem>
      </Pagination>
    )
  }
}

TablePagination.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired
}

export default TablePagination
