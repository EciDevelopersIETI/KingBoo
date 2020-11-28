import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { CategoriaUser } from "./components/categoriaUser";
import { EditarSitioProveedor } from "./components/editarSitioProveedor";
import Home from './components/home';
import { HomeProveedor } from "./components/homeProveedor";
import { HomeUser } from "./components/homeUser";
import ImageUpload from "./components/imageUpload";
import ListadoReservas from "./components/listadoReservas";
import Login from './components/login';
import { MisReservas } from "./components/misReservas";
import OpcionesProveedor from "./components/opcionesProveedor";
import Proveedor from './components/proveedor';
import { ProveedorUser } from "./components/proveedorUser";
import Reserva from './components/reserva';
import { ReservasEnSitio } from "./components/reservasEnSitio";
import { ReservaUser } from "./components/reservaUser";
import SignUp from './components/signUp';
import SignUpShop from "./components/signUpShop";
import { StatsProvider } from "./components/statsProvider";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateRoute2 } from "./PrivateRoute2";
import Categoria from "./views/categoria";
import CrearSitio from "./views/crearSitio";
import EditarSitio from "./views/editarSitio";
import ListaSitios from "./views/listaSitios";
import SignUpView from "./views/signUpView";


function App() {

  const LoginView = () => <Login />;
  const SignUpNormalView = () => <SignUp />;
  const SignUpShopView = () => <SignUpShop />;
  const home = () => <Home />;
  const proveedor = () => <Proveedor />;
  const reserva = () => <Reserva />;
  const crearSitio = () => <CrearSitio />;
  const listaSitios = () => <ListaSitios />;
  const listadoReservas = () => <ListadoReservas />;
  const reservasEnSitio = () => <ReservasEnSitio />;
  const homeUser = () => <HomeUser />;
  const homeProveedor = () => <HomeProveedor />;
  const editarSitioProveedor = () => <EditarSitioProveedor />;
  const statsProvider = () => <StatsProvider />;
  const categoriaUser = () => <CategoriaUser />;
  const proveedorUser = () => <ProveedorUser />;
  const reservaUser = () => <ReservaUser />;
  const editarSitio = () => <EditarSitio />;
  const misReservas = () => <MisReservas />;
  const opcionesProveedor = () => <OpcionesProveedor />;
  const categoria = () => <Categoria />;
  const signUpView = () => <SignUpView />;
  const imageUpload = () => <ImageUpload />;
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={home} />
          <Route exact path="/sign-up" component={SignUpNormalView} />
          <Route exact path="/sign-up-provider" component={SignUpShopView} />
          <Route exact path="/login" component={LoginView} />
          <PrivateRoute exact path="/proveedor" component={proveedor} />
          <PrivateRoute exact path="/reserva" component={reserva} />
          <Route exact path="/nuevositio" component={crearSitio} />
          <Route exact path="/listasitios" component={listaSitios} />
          <PrivateRoute2 exact path="/listadoreservas" component={listadoReservas} />
          <PrivateRoute2 exact path="/reservasensitio" component={reservasEnSitio} />
          <PrivateRoute exact path="/homeuser" component={homeUser} />
          <PrivateRoute2 exact path="/homeproveedor" component={homeProveedor} />
          <PrivateRoute2 exact path="/editarsitioproveedor" component={editarSitioProveedor} />
          <PrivateRoute2 exact path="/statsprovider" component={statsProvider} />
          <PrivateRoute exact path="/categoriauser" component={categoriaUser} />
          <PrivateRoute exact path="/proveedoruser" component={proveedorUser} />
          <PrivateRoute exact path="/reservauser" component={reservaUser} />
          <Route exact path="/editarsitio" component={editarSitio} />
          <Route exact path="/signUpView" component={signUpView} />
          <PrivateRoute exact path="/misreservas" component={misReservas} />
          <PrivateRoute2 exact path="/opcionesProveedor" component={opcionesProveedor} />
          <PrivateRoute exact path="/categoria" component={categoria} />
          <Route exact path="/upload" component={imageUpload} />
        </div>
      </div>
    </Router>
  );
}

export default App;
