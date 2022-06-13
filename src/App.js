import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContentGrid from './components/ContentGrid';
import UserTable from './components/UserTable';

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <div>
          <Switch>
            <Route path="/dashboard"><ContentGrid/></Route>
            <Route path="/"><UserTable/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
