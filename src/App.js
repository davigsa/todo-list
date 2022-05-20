import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import axios from 'axios'

import { UserPosts } from './containers/UserPosts';
import { Users } from './containers/Users'
import { TodoContext } from './contexts/TodoContext';
import { GlobalCss } from './assets/globalCss'

function App() {
  const [data, setData] = useState([])
  const [choosenOne, setChoosenOne] = useState(0)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => setData(res.data))
  }, [])
  
  return (
    <TodoContext.Provider value={{ data, setData, choosenOne, setChoosenOne }} >
      <GlobalCss /> 
      <div className="App">
        <header className="App-header">
          <p>To do list</p>
        </header>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path="users">
            <Route path=":id" element={<UserPosts />} />
          </Route>
        </Routes>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
