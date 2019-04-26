import React, { Component } from 'react';
// import './style/login.css'
import logo from './image/logo.png'
import loggedIn from './image/loggedIn.png'
import { Link } from "react-router-dom";
import AuthService from './authService'
class Home extends Component {
    render() {
        return ( 
            <div style={{margin:'1%',textAlign:'center'}} className='container' onMouseMove={(e) => {
                this.setState({ passwordError: false })
                this.setState({ usernameError: false })
                this.setState({ Error: false })
            }}>
                <img src={logo} className="logo" />
                
                <img src={loggedIn}/>
              <div><Link to='/' onClick={(e) => AuthService.logout()}>Signout</Link> </div>  
            </div>
        )
    }

}

export default Home;