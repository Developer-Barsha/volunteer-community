import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();

    return (
        <header>
            <img src={logo} alt="" onClick={()=>navigate('/home')}/>

            <div className="sm-icon" onClick={() => setDisplay(!display)}>
                {
                    display ?
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_k_FC4WlGY6j7VHmAu5Xqv0I1xU3Xe_2Iq-CvTwDLZamgAL62lfmwI6_BYSuM3CMEqY&usqp=CAU" alt="" />
                        :
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZL5iMlvsYHFlQxhox274GmXW-QuUe-Hd24QyaifWwkEImsT91EoxT5JJzRDnPlg6N7CI&usqp=CAU" alt="" />
                }
            </div>

            {
                display &&
                <div className="sm-menu">
                    <nav>
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'/about'}>Donation</CustomLink>
                        <CustomLink to={'/addactivity'}>Add activity</CustomLink>
                        <CustomLink to={'/add'}>Blogs</CustomLink>
                        <button onClick={()=>navigate('/register')}>Register</button>
                        <button>Admin</button>
                    </nav>
                </div>
            }

            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/about'}>Donation</CustomLink>
                        <CustomLink to={'/addactivity'}>Add activity</CustomLink>
                <CustomLink to={'/add'}>Blogs</CustomLink>
                <button onClick={()=>navigate('/register')}>Register</button>
                <button>Admin</button>
            </nav>
        </header>
    );
};

export default Header;