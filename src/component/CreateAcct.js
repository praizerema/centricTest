import React, { Component } from 'react';
import './style/CreateAcct.css'
import logo from './image/logo.png'
import { Link } from "react-router-dom";
class CreateAcct extends Component {
    render() {
        return (
            <div><div className="wrap">
                <img src={logo} className="logo" />
                <p className="pgh" >Send money to anyone's Mobile number, <br></br>
                    Email Address or Bank account, Recieve <br></br>
                    money or just pay as invoice</p>

                <p className="pgh2">
                    HOW WOULD YOU LIKE TO SIGN UP?
</p>

            </div>
                <div className="container" className='go-center'>
                    <Link to='CreateNewWallet' style={{ float: 'left', width:'365px',display: 'inline-block' }}><button type="button" name="new" className="wallet">CREATE NEW WALLET</button></Link>
                    <Link to='walletLogin' style={{ float: 'left',width:'365px',display: 'inline-block' }}>  <button type="button" name="existing bank account" className="existing">USE EXISTINGBANK ACCOUNT</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default CreateAcct;