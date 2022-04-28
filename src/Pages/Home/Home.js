import React from 'react';
import Activities from '../Activities/Activities';
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className='home'>
                <h1 className='title'>I Grow by Helping people in need</h1>
                <div className='input-btn'>
                    <input placeholder='Search.....' type="text" />
                    <button>Search</button>
                </div>
            </div>

            <Activities></Activities>
        </section>
    );
};

export default Home;