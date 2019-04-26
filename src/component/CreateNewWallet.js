import React, { Component } from 'react';
import './style/CreateNewWallet.css'
import logo from './image/logo.png'
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
class CreateNewWallet extends Component {
    TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    onChangeCapcha = value=> {
        console.log("Captcha value:", value);
      }
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
                        <ReCAPTCHA
                            sitekey={this.TEST_SITE_KEY}
                            onChange={this.onChangeCapcha}
                        />
                    </div>
                    <button type="button" className="continue">Continue</button>

                </form>

            </div>
        );
    }
}
export default CreateNewWallet;