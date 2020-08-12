import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToysContainer from './ToysContainer'
import SearchBar from './SearchBar'
import ToyHeader from './ToyHeader'

export default function App() {
  return (
    <div className="App">
      <ToyHeader />
      <SearchBar />
      <ToysContainer />
    </div>
  );
}
