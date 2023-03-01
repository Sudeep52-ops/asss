import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [red, setRed] = useState('red');

  const Change = () =>{
    if(red === 'red'){
      document.body.style.backgroundColor = 'red';
      setRed({backgroundColor : 'red'});
      setMode('red')
    }
    else{
      document.body.style.backgroundColor = 'red';
    }

  }

  const showAlert = (message, type)=>{
     
    setAlert({
      msg : message,
      type : type,
    })
    
    setTimeout( () => {
      setAlert(null)
    }, 1500)
  }


  const toggle = ()=>{
      if(mode === 'light'){
        setMode('dark')
        setColor('light')
        document.body.style.backgroundColor = '#0e7063d9';
        showAlert("Dark mode has been enabled successful", "success")
      }
      else{
        setMode('light')
        setColor('dark')
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled successful", "success")
      };
      
  }
  return (
    <Router>
    <>
      <Navbar text="sudeep" mode={mode} toggle={toggle} color={color} red={red} Change={Change}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
          <Route path="/" element={<Form mode={mode}  showAlert={showAlert}/>}>
          </Route>
        </Routes>
      
      {/* <About/> */}
      </div>
    </>
    </Router>
  );
}

export default App;
