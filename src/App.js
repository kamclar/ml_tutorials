import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Tutorials, T1, T2, T3 } from './pages/Tutorials';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/tutorials' exact component={Tutorials} />
        <Route path='/tutorials/t1' exact component={T1} />
        <Route path='/tutorials/t2' exact component={T2} />
        <Route path='/tutorials/t3' exact component={T3} />
        <Route path='/about' exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
