import RegProd from 'pages/registro_producto';
import GestionUser from 'pages/gestionUser';
import EditAccount from 'pages/editAccount';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import IngresoForm from 'pages/IngresoForm';
import GestionProd from 'pages/gestionProd';
import GestionSale from 'pages/gestionSale';

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
                    <Route path="/gestion_productos">
                        <GestionProd />
                    </Route>
                    <Route path="/gestion_ventas">
                        <GestionSale />
                    </Route>
                    <Route path="/gestion_datos">
                        <GestionUser/>
                    </Route>
                    <Route path="/">
                        <IngresoForm />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;