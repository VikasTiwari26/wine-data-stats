import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import wineData from "./data/Wine-Data.json";
import StatsTable from "./components/StatsTable/StatsTable";
import ParamsStorePage from "./components/ParamsStorePage/ParamsStorePage";
import HomeContainer from "./containers/HomeContainer";
import VideoUpload from "./components/VideoUpload/VideoUpload";

function App() {
  return (
    <div className="App">
      {/* <StatsTable wineData={wineData} propertyName={'Flavanoids'} />
      <StatsTable wineData={wineData} propertyName={'Gamma'} /> */}
      {/* <ParamsStorePage /> */}
      {/* <HomeContainer /> */}
      <VideoUpload />
    </div>
  );
}

export default App;
