import React from 'react';
import logo from './logo.svg';
import ComponentC from './components/componentC'
import './App.css';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <UserContext.Provider value={ 'Shubham' }>
          <ChannelContext.Provider value={ 'Code Evolution' }>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
