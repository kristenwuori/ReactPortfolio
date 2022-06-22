import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import '../Navbar/Navbar.css'
import img1 from '../../images/CroppedProfPicOfMe.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    // state = { clicked: false }
    const [clicked, setClicked] = useState(false);


    const handleClick = () => {
        setClicked( !clicked )
    }
    


        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'><img className='myLogo' src={img1} alt='logo'></img></h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
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
                    {user ? (
                        <li className='login'>
                            <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                    ) : (<>
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
                    </>)}
                
                </div>
                {/* <Button id='signUpBtn'>Sign Up</Button>
                <Button id='signInBtn'>Sign In</Button> */}
            </nav>
        )
    }


export default Navbar;