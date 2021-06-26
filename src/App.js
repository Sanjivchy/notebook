import React from "react";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
