import MainPage from 'pages/mainPage';
import IngresoForm from 'pages/IngresoForm';
import RegProd from 'pages/registro_producto';
import RegVenta from 'pages/registro_venta';
import GestionUser from 'pages/gestionUser';
import GestionProd from 'pages/gestionProd';
import GestionSale from 'pages/gestionSale';
import PrivateLayout from 'layouts/PrivateLayout';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Auth0Provider
            domain="sistemaventas.us.auth0.com"
            clientId="o7Iq4lblRuF8TZJkL8vC55BnKxr00o9o"
            redirectUri={window.location.origin}
            audience="api-sistemadeventas-napster"
        >  
            <Router>
                <Switch>
                    <Route path={["/gestion_productos", "/gestion_ventas", "/gestion_usuarios", "/registro_producto", "/registro_venta"]}>
                        <PrivateLayout>
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
                                <Route path="/registro_producto">
                                    <RegProd />
                                </Route>
                                <Route path="/registro_venta">
                                    <RegVenta />
                                </Route>
                            </Switch>
                        </PrivateLayout>
                    </Route>
                    <Route path="/iniciar_sesion">
                        <IngresoForm />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </Router>
        </Auth0Provider>
    );
}

export default App;