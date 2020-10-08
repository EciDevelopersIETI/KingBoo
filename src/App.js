import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import SignUp from './components/signUp';
import Home from './components/home';
import Proveedor from './components/proveedor';
import Reserva from './components/reserva';
import SignUpShop from "./components/signUpShop";
import CrearSitio from "./views/crearSitio";
import ListaSitios from "./views/listaSitios";
import Categoria from "./views/categoria";
import ListadoReservas from "./components/listadoReservas";
import {ReservasEnSitio} from "./components/reservasEnSitio";
import {HomeUser} from "./components/homeUser";
import {CategoriaUser} from "./components/categoriaUser";
import {ProveedorUser} from "./components/proveedorUser";
import {ReservaUser} from "./components/reservaUser";
import EditarSitio from "./views/editarSitio";
import MisReservas from "./components/misReservas";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  const LoginView = () => <Login />;
  const SignUpView = () => <SignUp />;
  const SignUpShopView = () => <SignUpShop />;
  const home = () => <Home />;
  const proveedor = () => <Proveedor />;
  const reserva = () => <Reserva />;
  const crearSitio = () => <CrearSitio/>;
  const listaSitios = () => <ListaSitios/>;
  const listadoReservas = () => <ListadoReservas/>;
  const reservasEnSitio = () => <ReservasEnSitio/>;
  const homeUser = () => <HomeUser/>;
  const categoriaUser = () => <CategoriaUser/>;
  const proveedorUser = () => <ProveedorUser/>;
  const reservaUser = () => <ReservaUser/>;
  const editarSitio = () => <EditarSitio/>;
  const misReservas = () => <MisReservas/>;
  const categoria = () => <Categoria/>;

  return (
    <Router>
    <div className="App">
      <div>
        <Route exact path="/" component={home} />
        <Route exact path="/sign-up" component={SignUpView} />
        <Route exact path="/sign-up-provider" component={SignUpShopView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/proveedor" component={proveedor} />
        <Route exact path="/reserva" component={reserva} />
        <Route exact path="/nuevositio" component={crearSitio} />
        <Route exact path="/listasitios" component={listaSitios} />
        <Route exact path="/listadoreservas" component={listadoReservas} />
        <Route exact path="/reservasEnSitio" component={reservasEnSitio} />
        <Route exact path="/homeuser" component={homeUser} />
        <Route exact path="/categoriauser" component={categoriaUser} />
        <Route exact path="/proveedoruser" component={proveedorUser} />
        <Route exact path="/reservauser" component={reservaUser} />
        <Route exact path="/editarsitio" component={editarSitio} />
        <Route exact path="/misReservas" component={misReservas} />
        <Route exact path="/categoria" component={categoria} />
      </div>
    </div>
  </Router>
  );
}

export default App;
