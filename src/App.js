import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  

const [alert,setAlert]=useState(null)
const showAlert=(message,type)=>{
  setAlert({
 message: message,
 type: type})
 setTimeout(() => {
  setAlert(null);
 },1500);
}

const [Mode,setMode]=useState('light')
  const toggleMode=()=>{
if(Mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='#042743'
  showAlert(" Dark Mode has been enabled ","success")
  // document.title="TextUtils-Dark Mode"
}
else {
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert(" Light Mode has been enabled ","success")
  // document.title="TextUtils-Light Mode"
}

  }



return (
   <>
    <Router>
  <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  
  <div className="container my-3">

<Switch>

       <Route exact path ="/about"> 
       <About mode={Mode}/>
       </Route>
       <Route exact path ="/">
       <TextForm heading="Try TextUtils-Word Counter, Character Counter, Remove extra spaces"  mode={Mode} showAlert={showAlert} />
       </Route> 
      
       </Switch> 
  </div>
   </Router> 
  </>
  );
}

export default App;
