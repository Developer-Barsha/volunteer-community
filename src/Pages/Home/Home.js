import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>I Grow by Helping people in need</h1>
            <div className='input-btn'>
                <input placeholder='Search.....' type="text" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Home;