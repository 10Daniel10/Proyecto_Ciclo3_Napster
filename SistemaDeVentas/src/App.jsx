import RegProd from 'pages/registro_producto';
<<<<<<< HEAD
import GestionUser from 'pages/gestionUser';
=======
import ModProd from 'pages/mod_producto';
import RegVenta from 'pages/registro_venta';
import ModVenta from 'pages/mod_venta';
import ModUsuario from 'pages/mod_usuario';
import Index from 'pages';
>>>>>>> ca8daba680d179e450e40ea1a7bcf27ffbd776d6
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
<<<<<<< HEAD
                    <Route path="/gestion_productos">
                        <GestionProd />
                    </Route>
                    <Route path="/gestion_ventas">
                        <GestionSale />
                    </Route>
                    <Route path="/gestion_datos">
                        <GestionUser/>
=======
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
>>>>>>> ca8daba680d179e450e40ea1a7bcf27ffbd776d6
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