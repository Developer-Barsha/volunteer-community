import React from 'react';
import './AddActivity.css'

const AddActivity = () => {
    return (
        <div className='add-activity'>
            <h2>Add A New Volunteer Activity</h2>
            <form>
                <input type="text" name='name' placeholder='Activity Name'/>
                <input type="text" name='image' placeholder='Activity Image'/>
                <input type="submit" value="Add New Service" />
            </form>
        </div>
    );
};

export default AddActivity;