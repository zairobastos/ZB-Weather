import React from "react";
import Seacher from './components/Seacher';
import Tempo from "./components/Tempo";
import Week from "./components/Week";
import './styles/global.scss';

function App() {
  return (
    <main>
      <Seacher/>
      <Tempo/>
      <Week/>
    </main>
  );
}

export default App;
