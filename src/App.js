import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Tutorials, T1, } from './pages/Tutorials';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  return (
    <Router>      
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/overview' exact component={Overview} />
        <Route path='/tutorials' exact component={Tutorials} />
        <Route exact path='/tutorials/t1' component={() => <T1 i='0'/>} />
        <Route exact path='/tutorials/t2' component={() => <T1 i='1'/>} />
        <Route exact path='/tutorials/t3' component={() => <T1 i='2'/>} />
        <Route exact path='/tutorials/t4' component={() => <T1 i='3'/>} />
        <Route exact path='/tutorials/t5' component={() => <T1 i='4'/>} />
        <Route exact path='/tutorials/t6' component={() => <T1 i='5'/>} />
        <Route path='/about' exact component={About} />
        <Route/>

      </Switch>
    </Router>
  );
}

export default App;
