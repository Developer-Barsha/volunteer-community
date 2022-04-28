import React, {useState, useEffect} from 'react';
import './Login.css';
import logo from '../../logos/Group 1329.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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

    const handleLogin = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <section className='form-container'>
            <img src={logo} alt="" />
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" name='email' placeholder='Your Email' />
                    <input type="password" name='password' placeholder='Your Password' />
                    <input type="submit" value="Login" />
                    <p style={{ color: '#4090FE', textAlign:'left' }}>{msg}</p>
                </form>
                <p style={{ padding: '8px 0' }}>Don't have an account? <Link to={'/register'} style={{ color: '#4090FE' }}>Register Now</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Login;