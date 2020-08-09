import React from "react";
import "./App.css";

import MainView from './components/MainView/MainView'
import Menu from './components/Menu/Menu'
function App() {
  return (
    <div className="App">
      <Menu/>
      <MainView/>
    </div>
  );
}

export default App;
