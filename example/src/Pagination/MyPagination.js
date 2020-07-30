import React, { useState } from 'react'
import Pagination from 'rc-pagination'

const MyPagination = (props) => {
  const [value, setValue] = useState('')
  return (
    <>
      <Pagination
        disabled={props.Boolean}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </>
  )
}

export default MyPagination
