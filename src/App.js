import React from 'react';
import logo from './mintbean.png';
import './styles/index.css';


import CameraFeed from './components/CameraFeed'
import MintNav from './components/MintNav'

function App() {

  return (
    <>
      <MintNav />
      <div className="App">
        <h1 className='mt-2 mb-2'>Camera Browser API Tutorial</h1>
        <CameraFeed />
      </div>
    </>
  )
}

export default App;
