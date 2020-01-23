import React from 'react';
import logo from './logo.svg';
import EffectHookExample1 from './components/effectHookExample1'
import EffectHookExample2 from './components/effectHookExample2'
import EffectHookExample3 from './components/effectHookExample3'
import EffectHookExample4 from './components/effectHookExample4'
import IntervalHookCounter5 from './components/intervalHookCounter5'
import DataFetching from './components/dataFetching6'
import DataFetching7 from './components/dataFetching7'
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
      {/* < EffectHookExample1 /> */}
      {/* < EffectHookExample2 /> */}
      {/* < EffectHookExample3 /> */}
      {/* <EffectHookExample4 /> */}
      {/* <IntervalHookCounter5 /> */}
      {/* <DataFetching /> */}
      <DataFetching7 />
    </div>
  );
}

export default App;
