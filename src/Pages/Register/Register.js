import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (user) {
            navigate('/');
        }
        if (error) {
            setMsg(error.message);
        }
        if (loading) {
            setMsg('Loading...........')
        }
    }, [user, error, loading])

    const handleRegister = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <section className='form-container'>
            <img src={logo} alt="" />
            <div className='form'>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <input type="password" name='password' placeholder='Your Password' required />
                    <input type="submit" value="Register" />
                    <p style={{ color: '#4090FE', textAlign:'left' }}>{msg}</p>
                </form>
                <p style={{ padding: '8px 0' }}>Have an account? <Link to={'/login'} style={{ color: '#4090FE' }}>Login Now</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Register;