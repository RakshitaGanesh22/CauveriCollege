// App.js
import './App.css';
import React from 'react';
import Main from "./pages/Main";
import { ThemeProviderCustom } from "./components/theme";
import Admission from "./components/admission"
import ScrollTop from "./components/GoUp";
function App() {
  return (
    <ThemeProviderCustom>
       <Admission/>
      <div className="App">
        <Main />
      </div>
      <ScrollTop />
    </ThemeProviderCustom>
  );
}

export default App;
