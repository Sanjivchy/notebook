import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className="bg-gray-200 w-full h-screen">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
