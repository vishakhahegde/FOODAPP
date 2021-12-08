//import logo from './logo.svg';
import './App.css';
//import reactDom from 'react-dom';
import About from './components/About';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Foods from './components/Foods';
import Navvy from './Navbar';
import {Route,Link} from 'react-router-dom';
import {useState} from 'react';

import Login from "./components/login/Login"
import Register from "./components/register/Register"


function App() {
  const [user,setLoginUser] = useState({
  })
  return (
    <div className="App">
    <Navvy/>
    <div >
    <Route exact path="/Foods" component={Foods}/>
    <Route exact path="/" component={Home}/> 
    <Route exact path="/About" component={About}/>
    <Route exact path="/Tech" component={Tech}/>
    <Route exact path="/Contact" component={Contact}/>
    

    
    {/* <Route exact path="/">
    {
      user && user._id ? <Home/>:<Login/>
    }<Home/></Route> 
  <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
  <Route path="/Register"><Register/></Route>
   */}
    
    </div>


    </div>
  );
}

export default App;
