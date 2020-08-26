import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import SignUp from './components/signUp';
import Home from './components/home';
import SignUpShop from "./components/signUpShop";

function App() {

  const LoginView = () => <Login />;
  const SignUpView = () => <SignUp />;
  const SignUpShopView = () => <SignUpShop />;
  const home = () => <Home />;

  return (
    <Router>
    <div className="App">
      <div>
        <Route exact path="/" component={LoginView} />
        <Route exact path="/sign-up" component={SignUpView} />
        <Route exact path="/sign-up-provider" component={SignUpShopView} />
        <Route exact path="/home" component={home} />
      </div>
    </div>
  </Router>
  );
}

export default App;
