// import React from 'react'
import { useContext } from 'react'
import { Context } from '../App';

const List = ( ) => {

    const {items} = useContext(Context); 
    console.log (items);

  return (
    <div>
       <div>List6</div>
       <div>List of users</div> 
       <ul>
        {items && items.map(u => <li key={u.id}>{u.name}</li>)}
       </ul>
       
    </div>
    
  )
}

export default List;
