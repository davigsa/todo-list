import { createGlobalStyle } from 'styled-components';
import { Routes, Route, Link } from "react-router-dom";

import { Posts } from './containers/Posts';

const GlobalCss = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  header {
    padding: 8px;
    background: #00e88f;
    text-align: center;
    font-weight: bolder;
  }
`

function App() {

  return (
    <>
      <GlobalCss />
      <div className="App">
        <header className="App-header">
          <p>To do list</p>
        </header>
        <Routes>
          <Route path='/' element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
