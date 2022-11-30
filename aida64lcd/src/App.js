import logo from './logo.svg';
import './App.css';
import React, { useEffect, useMemo, useState } from 'react';

function App() {
  useEffect( 
    async () => {
      const resp = await fetch("http://127.0.0.1:9017/api/data" , {
        headers:{
          'content-type':'application/json'
      },
      method:'GET',
      })
      const data = await resp.json()
      console.log(data)

    }
  ,[])
  
  
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
