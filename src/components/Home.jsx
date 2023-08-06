import React from 'react'
import Widget from './Widget'

const Home = ({users}) => {
  return (
    <div>
      <div>Home</div>
      <Widget users={users} />
    </div>
    
  )
}

export default Home
