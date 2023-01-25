import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
//import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const[mode, setMode] = useState('light');
  const[switchText, setswitchText] = useState('dark');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{   
    if(message == null){      
      setAlert(null)
    }
    else{
      setAlert({
        msg : message,
        type : type
      })
    }
  } 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setswitchText('light');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    }   
    else{
      setMode('light')
      setswitchText('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode has been disabled", "success");
    }
  }
  const toggleMode2 = ()=>{
    
    if(mode === 'blue'){
      setMode('green');
      setswitchText('blue');
      document.body.style.backgroundColor = 'green';
      showAlert("Green Mode has been enabled", "success");
    }   
    else{
      setMode('blue');
      setswitchText('green');
      document.body.style.backgroundColor = 'blue';
      showAlert("Green Mode has been enabled", "success");
    }  
    console.log(mode);   

  }
  return (
    <>
    
      <Navbar title="value pass" mode = {mode} switchText = {switchText} toggleMode={toggleMode} toggleMode2={toggleMode2}></Navbar>
      <Alert alert ={alert} showAlert = {showAlert}></Alert>
        <div className="container my-3">
        {/* <About /> */}
        <Form heading = "Enter text"  mode = {mode} switchText = {switchText} showAlert = {showAlert} ></Form>
            {/* <Route path="/about">
              
            </Route>
            <Route path="/">
             
            </Route> */}
            
        </div>
        </>
  );
}

export default App;
