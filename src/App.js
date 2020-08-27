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
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  const LoginView = () => <Login />;
  const SignUpView = () => <SignUp />;
  const SignUpShopView = () => <SignUpShop />;
  const home = () => <Home />;
  const proveedor = () => <Proveedor />;
  const reserva = () => <Reserva />;
  const crearSitio = () => <CrearSitio/>



  return (
    <Router>
    <div className="App">
      <div>
        <Route exact path="/" component={LoginView} />
        <Route exact path="/sign-up" component={SignUpView} />
        <Route exact path="/sign-up-provider" component={SignUpShopView} />
        <Route exact path="/home" component={home} />
        <Route exact path="/proveedor" component={proveedor} />
        <Route exact path="/reserva" component={reserva} />
        <Route exact path="/nuevositio" component={crearSitio} />
      </div>
    </div>
  </Router>
  );
}

export default App;
