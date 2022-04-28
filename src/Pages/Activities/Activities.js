import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/activities')
        .then(res=>res.json())
        .then(data=>setActivities(data));
    } ,[]);
    

    return (
        <div className='activities'>
            {
                activities.map(activity=><Activity key={activity._id} activity={activity}></Activity>)
            }
        </div>
    );
};

export default Activities;