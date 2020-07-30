import React, { useState } from 'react'
import { ExampleComponent } from 'sample-library-npm'
import 'sample-library-npm/dist/index.css'

import MyTable from './Table/MyTable'
import MyPagination from './Pagination/MyPagination'
import MyPassword from './Inputs/MyPassword'

const App = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      render: () => (
        <a
          href='#'
          onClick={() => {
            alert('GAuravdjddkfkdfhdk')
          }}
        >
          Delete
        </a>
      )
    }
  ]

  const data = [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' }
  ]

  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
    console.log('sss', e.target.value)
  }
  return (
    <>
      <ExampleComponent text='Create Sample Library NPM ' />
      <MyTable data={data} columns={columns} />
      <MyPagination disabled={true} onChange={handleChange} />
      <MyPassword value={value} onChange={handleChange} />
    </>
  )
}

export default App
