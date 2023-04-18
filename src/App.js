
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
<div className="App">
    <NavBar></NavBar>
    
      
      <Router>
      <Routes>
        <Route path='/contact' Component={ContactUs}></Route>
        <Route path='/' Component={AboutUs}></Route>
        <Route path='/register' Component={SignupForm}></Route>
        <Route path='/login' Component={LoginForm}></Route>
      </Routes>
      </Router>
     
   
  
    

    </div>
  );
}

export default App;
