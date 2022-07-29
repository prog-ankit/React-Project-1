import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
// Next Task is to Add Different Color Modes
// Solve the bug word count bug

import About from './components/About';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
//Proptypes is used to give restrictions passed to props of functions
function App() {

  const [mode, setMode] = useState('light');
  // const [green, setGreen] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010a5e';//grey  
      showAlert('Dark Mode has been Enabled', 'success');

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }
  return (
    <>
      <BrowserRouter>

        {/* <NavBar page="My Site" title="Home" about={msg}/> */}

        <NavBar page="Text Utilizer" title="Home" about='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextArea heading="Analyze and Compute your text" mode={mode} showalert={showAlert}/>}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
          </Routes>

        </div>


      </BrowserRouter>
    </>
  );
}

export default App;
