import React, { useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import './App.css';
import MindARViewer from './mindar-viewer';

function App() {
  const [started, setStarted] = useState(true);
  return (
    <div className="App">




      {started && (
	<div className="container">
	  <MindARViewer/>
	  <video></video>
	</div>
      )}
    </div>
  );
}

export default App;
