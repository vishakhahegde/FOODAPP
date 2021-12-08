import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import About from './components/About';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Foods from './components/Foods';
import Navvy from './Navbar';
import {Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Navvy/>
    <div >
    <Route exact path="/Foods" component={Foods}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Tech" component={Tech}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/" component={Home}/>

    
    </div>


    </>
  );
}

export default App;
