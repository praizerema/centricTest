import React, { Component } from 'react';
import './style/walletLogin.css'
import logo from './image/logo.png'
import { Link } from "react-router-dom";

class walletLogin extends Component {
    render() {
        return (
                <div className="wrap">
                    <img src={logo} className="center" />

<p class="pgh">Send money to anyone's Mobile number, <br></br>
    Email Address or Bank account, Recieve <br></br>
    money or just pay as invoice</p>

<form action="" method="POST">
    <label for="financialIntstitution">Choose your Financial Intstitution</label>
    <select id="financialIntstitution" name="financialIntstitution">
        <option value="FCMB">FCMB</option>
        <option value="GT">GT</option>
    </select>

    <label for='pssword'>Enter Account Number</label>
    <input name=' accountNumber' type="text" placeholder=" Account Number" />
    <p class="pgh1">Hecfgfe</p>
    <label for='code'>Enter Code</label>
    <input name=' code' type="text" placeholder=" Code" />
    <div className="container">
        <button type="button" className="continue">Continue</button>
</div>


</form>
</div>
        );
    }
}
export default walletLogin;