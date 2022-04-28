import React from 'react';
import logo from '../../../logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />

            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/about'}>Donation</CustomLink>
                <CustomLink to={'/add'}>Events</CustomLink>
                <CustomLink to={'/add'}>Blogs</CustomLink>
                <button>Register</button>
                <button>Admin</button>
            </nav>
        </header>
    );
};

export default Header;