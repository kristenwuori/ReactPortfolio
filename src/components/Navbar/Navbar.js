import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import '../Navbar/Navbar.css'
import img1 from '../../images/CroppedProfPicOfMe.jpg';
import {Link} from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'><img className='myLogo' src={img1} alt='logo'></img></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                <div className='listContainer'>
                <ul className='regList'>
                    <li className='login'>
                        <Link to='/login' className='loginBtn'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li className='register'>
                        <Link to='/register' className='registerBtn'> Register
                            <FaUser className='faUser'/>
                        </Link>
                    </li>
                </ul>
                </div>
                {/* <Button id='signUpBtn'>Sign Up</Button>
                <Button id='signInBtn'>Sign In</Button> */}
            </nav>
        )
    }
}

export default Navbar;