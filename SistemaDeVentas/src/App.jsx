
import RegProd from 'pages/registro_producto';
import ModProd from 'pages/mod_producto';
import RegVenta from 'pages/registro_venta';
import ModVenta from 'pages/mod_venta';
import ModUsuario from 'pages/mod_usuario';
import Index from 'pages';
import EditAccount from 'pages/editAccount';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import IngresoForm from 'pages/IngresoForm';

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
                    <Route path="/modificacion_producto">
                        <ModProd/>
                    </Route>
                    <Route path="/registro_venta">
                        <RegVenta/>
                    </Route>
                    <Route path="/modificacion_venta">
                        <ModVenta/>
                    </Route>
                    <Route path="/modificacion_usuario">
                        <ModUsuario/>
                    </Route>
                    <Route path="/gestion-datos">
                        <Index/>
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