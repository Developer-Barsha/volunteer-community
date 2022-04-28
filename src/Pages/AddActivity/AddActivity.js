import React from 'react';
import './AddActivity.css'

const AddActivity = () => {
    const handleAddActivity=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const activity = {name, image};
        console.log(activity);

        fetch('http://localhost:5000/activities', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(activity)
        })
        .then(res=>res.json())
        .then(data=>console.log('data', data))
    }

    return (
        <div className='add-activity'>
            <h2>Add A New Volunteer Activity</h2>
            <form onSubmit={handleAddActivity}>
                <input type="text" name='name' placeholder='Activity Name'/>
                <input type="text" name='image' placeholder='Activity Image'/>
                <input type="submit" value="Add New Activity" />
            </form>
        </div>
    );
};

export default AddActivity;