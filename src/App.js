import './App.css';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggle = () => {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success")
      document.title = "Dark Mode Enable"
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success")
      document.title = "Light Mode Enable"
    }
  }

  return (
    <>
    <BrowserRouter>
    <NavBar title="TextUtils" aboutText= "About Us" mode={mode} toggleMode = {toggle}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
          <Route
            exact path="/"
            element = <TextForm
              showAlert={showAlert}
              heading="Try Textutils - Word counter, Character counter, Listen the words"
              mode={mode}
            />
          />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;


// we can deploy this aap using gh-pages via github "https://create-react-app.dev/docs/deployment#github-pages"
// If you want to deploy in domain then install, install digital ocean, then add nginx // https://www.codewithharry.com/blogpost/lemp-stack-on-ubuntu-20/ 
// we can add ssl certification by cert-bot in ngninx