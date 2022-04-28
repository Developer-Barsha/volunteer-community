import React from 'react';
import logo from '../../logos/Group 1329.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className='form-container'>
            <img src={logo} alt="" />
            <div className='form'>
                <h2>Register</h2>
                <form>
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="text" name='email' placeholder='Your Email' />
                    <input type="submit" value="Register" />
                </form>
                <p style={{padding:'8px 0'}}>Have an account? <Link to={'/login'} style={{color:'#4090FE'}}>Login Now</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Register;