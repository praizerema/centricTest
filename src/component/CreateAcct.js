import React, { Component } from 'react';
import './style/CreateAcct.css'
import logo from './image/logo.png'
import { Link } from "react-router-dom";
class CreateAcct extends Component {
    render() {
        return (
<div className="wrap">
<img src={logo} className="center"/>
<p className="pgh" >Send money to anyone's Mobile number, <br></br>
    Email Address or Bank account, Recieve <br></br>
    money or just pay as invoice</p>

<p className="pgh2">
    HOW WOULD YOU LIKE TO SIGN UP?
</p>
<div className="container">
    <Link to='CreateNewWallet' ><button type="button" name="new" className="wallet">CREATE NEW WALLET</button></Link>
    <Link to='walletLogin'>  <button type="button" name="existing bank account" className="existing">USE EXISTINGBANK ACCOUNT</button>
    </Link>
</div>
</div>
);
}
}
export default CreateAcct;