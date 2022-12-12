import './App.css';
// import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
 
function App() {
  const [mode, setmode] = useState("light")

  const toggle = () => {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText= "About Us" mode={mode} toggleMode = {toggle}/>
      <div className="container my-3">
      <TextForm heading="Enter your text below" mode={mode}/>
      {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
