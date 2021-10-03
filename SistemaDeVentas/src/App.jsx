import RegProd from 'pages/registro_producto';
import GestionUser from 'pages/gestionUser';
import ModProd from 'pages/mod_producto';
import RegVenta from 'pages/registro_venta';
import ModVenta from 'pages/mod_venta';
import ModUsuario from 'pages/mod_usuario';
import IngresoForm from 'pages/IngresoForm';
import GestionProd from 'pages/gestionProd';
import GestionSale from 'pages/gestionSale';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
        <div className="App">
            <Router>
                <Switch>
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
                    <Route path="/">
                        <IngresoForm />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;