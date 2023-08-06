import React from 'react'
import List from './List'

const Widget = ({users}) => {
  return (
    <div>
      <div>Widget</div>

      <List users={users} />
  
    </div>
  )
}

export default Widget
