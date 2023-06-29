import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import wineData from './data/Wine-Data.json'
import StatsTable from './components/StatsTable/StatsTable';

function App() {

  return (
    <div className="App">
      <StatsTable wineData={wineData} propertyName={'Flavanoids'} />
      <StatsTable wineData={wineData} propertyName={'Gamma'} />
    </div>
  );
}

export default App;
