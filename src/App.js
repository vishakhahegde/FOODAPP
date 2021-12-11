//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Foods from './components/Foods';
import Navvy from './Navbar';
import {useState} from 'react';

import Login from "./components/login/Login"
import Register from "./components/register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
          <Navvy/>
     <Route exact path="/Foods" component={Foods}/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/About" component={About}/>
     <Route exact path="/Tech" component={Tech}/>
     <Route exact path="/Contact" component={Contact}/>

    <Switch>
      <Route exact path="/Choose">
        {
          user && user._id ? <Foods/>:<Login/>
        }<Foods/>
      </Route>
      <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
      <Route path="/Register"><Register/></Route>
    </Switch>

      </Router>

    </div>
  );
}

export default App;














