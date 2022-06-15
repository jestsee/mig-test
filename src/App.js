import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContentGrid from './components/ContentGrid';
import UserTable1 from './components/UserTable1';

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <div>
          <Switch>
            <Route path="/dashboard"><ContentGrid/></Route>
            <Route path="/"><UserTable1/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
