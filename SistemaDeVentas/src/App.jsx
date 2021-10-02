import 'styles/style.css';
import Index from 'pages';
import EditAccount from 'pages/editAccount';
import RegProd from 'pages/registro_producto';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/editaccount">
                        <EditAccount />
                    </Route>
                    <Route path="/registro_producto">
                        <RegProd/>
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