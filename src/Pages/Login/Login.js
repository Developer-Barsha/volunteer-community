import React from 'react';
import './Login.css';
import logo from '../../logos/Group 1329.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='form-container'>
            <img src={logo} alt="" />
            <div className='form'>
                <h2>Login</h2>
                <form>
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="text" name='email' placeholder='Your Email' />
                    <input type="submit" value="Login" />
                </form>
                <p style={{padding:'8px 0'}}>Don't have an account? <Link to={'/register'} style={{color:'#4090FE'}}>Register Now</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Login;