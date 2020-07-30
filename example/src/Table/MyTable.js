import React from 'react'
import Table from 'rc-table'

const MyTable = ({columns,data,auto,fixed}) => {
  return (
    <>
      <Table columns={columns} data={data} tableLayout={auto | fixed} />
    </>
  )
}

export default MyTable
