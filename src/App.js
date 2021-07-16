import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './page/home/Home';
import "./scss/std.scss";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
