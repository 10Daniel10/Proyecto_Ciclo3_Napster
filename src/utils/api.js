import axios from 'axios';

const getToken = () => {
   return `Bearer ${localStorage.getItem('token')}`
}

// CRUD USUARIO

export const obtenerUsuarios = async (successCallback, errorCallback) => {
   const options = { 
      method: 'GET', 
      url:'http://localhost:5050/usuarios/',
      headers: {
         Authorization: getToken(),
      }
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
   const options = {
      method: 'POST',
      url: 'http://localhost:5050/usuarios',
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
   const options = {
      method: 'PATCH',
      url: `http://localhost:5050/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
   const options = {
      method: 'DELETE',
      url: `http://localhost:5050/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
   const options = { 
      method: 'GET', 
      url: 'http://localhost:5000/usuarios/self',
      headers: {
         Authorization: getToken(),
      }
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD VENTA

export const obtenerVentas = async (successCallback, errorCallback) => {
   const options = { 
      method: 'GET', 
      url:'http://localhost:5050/ventas/',
      headers: {
         Authorization: getToken(),
      }
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVentas = async (data, successCallback, errorCallback) => {
   const options = {
      method: 'POST',
      url: 'http://localhost:5050/ventas',
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVentas = async (id, data, successCallback, errorCallback) => {
   const options = {
      method: 'PATCH',
      url: `http://localhost:5050/ventas/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVentas = async (id, successCallback, errorCallback) => {
   const options = {
      method: 'DELETE',
      url: `http://localhost:5050/ventas/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD PRODUCTO 

export const obtenerProductos = async (successCallback, errorCallback) => {
   const options = { 
      method: 'GET', 
      url:'http://localhost:5050/productos/',
      headers: {
         Authorization: getToken(),
      }
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
   const options = {
      method: 'POST',
      url: 'http://localhost:5050/productos',
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
   const options = {
      method: 'PATCH',
      url: `http://localhost:5050/productos/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
   const options = {
      method: 'DELETE',
      url: `http://localhost:5050/productos/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
   };
   await axios.request(options).then(successCallback).catch(errorCallback);
};