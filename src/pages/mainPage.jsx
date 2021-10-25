import React from 'react'
import CardLinks from 'components/componentsCards'
import 'styles/style.css'

const MainPage = () => {
   return (
      <div className="mainContainer">
         <div>
            <ul className="breedCardContainer">
               <CardLinks
                  nombre ="Iniciar Sesión" 
                  imagen ="https://media.istockphoto.com/photos/human-figure-icon-graphic-as-user-login-button-on-white-keyboard-picture-id1226883131?b=1&k=20&m=1226883131&s=170667a&w=0&h=FMYb1DFOYbcb2vmbzZhq71k-4cuarJ1U4xCBWjGnze8="
                  link = '/iniciar_sesion' 
               />
               <CardLinks
                  nombre ="Registro Productos" 
                  imagen ="https://media.istockphoto.com/photos/distribution-warehouse-logistics-packaged-parcels-ready-for-shipment-picture-id941410386?b=1&k=20&m=941410386&s=170667a&w=0&h=29SgCRqrTHUb9rD1osJzm1Tww089MAq46ITPaR1lJ7M="
                  link = '/registro_producto' 
               />
               <CardLinks
                  nombre="Registro Ventas" 
                  imagen="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  link = '/registro_venta'
               />
            </ul>
         </div>
         <div>
            <ul className="breedCardContainer">
               <CardLinks
                  nombre="Gestión Usuarios" 
                  imagen="https://media.istockphoto.com/photos/businesswoman-working-at-modern-officetechnical-price-graph-and-red-picture-id1286815175?b=1&k=20&m=1286815175&s=170667a&w=0&h=s-5GMvGsxsq0W8AeOu1c_iECtfGAQkfUerZijZEkDoM="
                  link = '/gestion_usuarios'
               />
               <CardLinks
                  nombre="Gestión Productos" 
                  imagen="https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  link = '/gestion_productos'
               />
               <CardLinks
                  nombre="Gestión Ventas" 
                  imagen="https://media.istockphoto.com/photos/gift-cards-with-blue-colored-bow-picture-id1280934412?b=1&k=20&m=1280934412&s=170667a&w=0&h=OxUXCX5PWSgWoBPmQl0-HTbwJ5TXuax-a9CVg54ehxU="
                  link = '/gestion_ventas'
               />
            </ul>
         </div>
      </div>
   )
}

export default MainPage;