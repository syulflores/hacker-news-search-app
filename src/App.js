import './App.css';
import React, {useEffect, useState} from 'react';
import {getStoryIds} from './services/hackerNewsAPI';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};

export default App;


/*
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
*/