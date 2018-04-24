import React from 'react'
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

const TablePagination = () => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href='#' />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>
          1
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

export default TablePagination
