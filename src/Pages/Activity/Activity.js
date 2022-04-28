import React from 'react';
import './Activity.css'

const Activity = ({ activity }) => {
    // let letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }

    const colors = ['#FFBC3E', '#FF7045', '#4090FE', '#421FD1', 'crimson', '#2ad37e']
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className='activity' id='activity'>
            <img src={activity.image} alt="" />

            <div className="text" style={{ backgroundColor: color}}>
                <h3 style={{paddingLeft:'10px'}}>{activity.name}</h3>
            </div>
        </div>
    );
};

export default Activity;