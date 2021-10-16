import RegProd from 'pages/registro_producto';
import GestionUser from 'pages/gestionUser';
import RegVenta from 'pages/registro_venta';
import IngresoForm from 'pages/IngresoForm';
import GestionProd from 'pages/gestionProd';
import GestionSale from 'pages/gestionSale';
import RegUsuario from 'pages/registro_usuario';
import { Auth0Provider } from "@auth0/auth0-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Auth0Provider
        domain="misiontic-napster.us.auth0.com"
        clientId="2Kv0ttlFaRWRLEnAPx8yViPbLCzk6PM1"
        redirectUri={window.location.origin}
    >  
        <Router>
            <Switch>
                <Route path="/gestion_productos">
                    <GestionProd />
                </Route>
                <Route path="/gestion_ventas">
                    <GestionSale />
                </Route>
                <Route path="/gestion_usuarios">
                    <GestionUser />
                </Route>
                <Route path="/registro_usuario">
                    <RegUsuario/>
                </Route>
                <Route path="/registro_producto">
                    <RegProd/>
                </Route>
                <Route path="/registro_venta">
                    <RegVenta/>
                </Route>
                <Route path="/">
                    <IngresoForm />
                </Route>
            </Switch>
        </Router>
    </Auth0Provider>
    );
}

export default App;