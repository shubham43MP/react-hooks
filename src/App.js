import React from 'react';
import logo from './logo.svg';
import UseReducerExample1 from './components/useReducerCounter'
import UseReducerExample2 from './components/useReducerCounter2'
import UseReducerExample3 from './components/useReducerCounter3'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      {/* <UseReducerExample1/> */}
      {/* <UseReducerExample2 /> */}
      <UseReducerExample3 />
    </div>
  );
}

export default App;
