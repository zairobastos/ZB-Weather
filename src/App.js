import React from "react";
import Seacher from './components/Seacher';
import Tempo from "./components/Tempo";
import Week from "./components/Week";
import Chart from "./components/Chart";
import SeacherContext from "./contexts/SeacherContext";
import './styles/global.scss';

function App() {
  return (
    <SeacherContext.Provider value="30º">
      <main>
        <Seacher/>
        <Tempo/>
        <Chart/>
        <Week/>
      </main>
    </SeacherContext.Provider>
  );
}

export default App;
