import React from 'react';
import './Activity.css'

const Activity = ({ activity }) => {
    const colors = ['#FFBC3E', '#FF7045', '#4090FE', '#421FD1', 'crimson', '#2ad37e']
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className='activity' id='activity'>
            <img src={activity.image} alt="" />

            <div className="text" style={{ backgroundColor: color}}>
                <h3 style={{textTransform:"capitalize", textAlign:'center'}}>{activity.name}</h3>
            </div>
        </div>
    );
};

export default Activity;