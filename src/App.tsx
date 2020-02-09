import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icapture from './components/Icapture/Icapture';
import IcHtml from './components/IcHtml/IcHtml';
import ImgCapture from './components/IcHtml/ImgCapture';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Icapture></Icapture> */}
        <ImgCapture />
      </header>
    </div>
  );
}

export default App;
