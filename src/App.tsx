import React from 'react';
import './App.scss';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <List typeList="list" />
      <List typeList="category" />
      <List typeList="archive" />
    </div>
  );
}

export default App;
