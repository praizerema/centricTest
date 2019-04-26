import React, { Component } from 'react';
import './style/CreateNewWallet.css'
import logo from './image/logo.png'
import { Link } from "react-router-dom";
class CreateNewWallet extends Component {
    render() {
        return (

            <div className="wrap">

                <img src={logo} className="logo" />

                <p className="pgh" >Send money to anyone's Mobile number,
               Email <br /> Address or Bank Account, Recieve
               money or just <br /> pay as invoice </p>

                <form action="" method="POST">

                    <label for='phoneNumber'>Enter Phone Number</label>
                    <input name='phoneNumber' id="phoneNumber" type="tel" placeholder="Mobile No" />

                    <label for='password'>Choose a Password</label>

                    <input name='password' id="password" type="password" placeholder="Password" />
                    <label for='password2'> Choose a Password Again</label>
                    <input name='password2' id='password2' type="password" placeholder="Confirm password" />
                    <div className="robot">
                        <span>I am not a robot </span>
                    </div>
                    <button type="button" className="continue">Continue</button>

                </form>

            </div>
        );
    }
}
export default CreateNewWallet;