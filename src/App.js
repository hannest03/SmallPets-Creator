import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import "./scss/std.scss";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
                <h1>Test123</h1>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
