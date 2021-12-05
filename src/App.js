import React from "react";
import Seacher from './components/Seacher';
import Tempo from "./components/Tempo";
import Week from "./components/Week";
import Chart from "./components/Chart";
import './styles/global.scss';
import {StateProvider} from './contexts/StateContext'

function App() {
  return (
    <StateProvider value={"30º"}>
      <main>
        <Seacher/>
        <Tempo/>
        <Chart/>
        <Week/>
      </main>
    </StateProvider>
  );
}

export default App;
