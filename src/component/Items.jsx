import React from 'react'

const Items = ({currentItems}) => {
  return (
    <div>
        {currentItems &&
        currentItems.map((item) => (
          <div className='d-flex bg-green-100'>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  )
}

export default Items