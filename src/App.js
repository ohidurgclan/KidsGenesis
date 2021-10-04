import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Teacher from './components/Teacher/Teacher';
import Contact from './components/Contact/Contact';
import Notfound from './components/NotFound/Notfound';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, 
  Switch,
  Route,
 } from 'react-router-dom';


function App() {
  return (
      <Router>
      <Header />
        <Switch >
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/teacher">
            <Teacher></Teacher>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
