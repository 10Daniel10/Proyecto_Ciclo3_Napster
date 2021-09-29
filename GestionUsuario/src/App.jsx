import 'styles/style.css';
import Index from 'pages';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditAccount from 'pages/editAccount';

function App() {
  return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/editaccount">
                        <EditAccount />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;