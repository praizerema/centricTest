import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/login'
import Smple from './component/smple'
import CreateNewWallet from './component/CreateNewWallet'
import CreateAcct from './component/CreateAcct'
import walletLogin from './component/walletLogin'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './component/home';
import AuthService from './component/authService'

class App extends Component {

  onComponentDidMount(){
      setInterval(() => {
        if(AuthService.isTokenExpired(AuthService.getToken())){
          this.props.history.push("/home")
        }
      }, 900);
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/smple" component={Smple} />
        <Route path="/CreateNewWallet" component={CreateNewWallet} />
        <Route path="/CreateAcct" component={CreateAcct} />
        <Route path="/walletLogin" component={walletLogin} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
