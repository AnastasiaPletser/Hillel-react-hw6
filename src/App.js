import { createContext } from 'react';
import './App.css';
import Home6 from "./components/Home";

export const Context = createContext(null);

function App()  {
    const users = [
        {id:1, name: "User 1"},
        {id:2, name: "User 2"},
        {id:3, name: "User 3"},
        {id:4, name: "User 4"}
    ]

     return (
        
<div>
    <Context.Provider value={{items: users}}>
        {/* <Home6 users={users} /> */}
        <Home6/>
    </Context.Provider>
        
        <footer>Footer</footer>
      
    </div>
  )
}

export default App;
