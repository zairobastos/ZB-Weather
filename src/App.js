import React from "react";
import Seacher from './components/Seacher';
import Tempo from "./components/Tempo";
import Week from "./components/Week";
import Chart from "./components/Chart";
import './styles/global.scss';

function App() {
  return (
    <main>
      <Seacher/>
      <Tempo/>
      <Chart/>
      <Week/>
    </main>
  );
}

export default App;
