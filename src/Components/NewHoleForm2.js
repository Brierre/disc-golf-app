import React, { useState } from 'react';

export const NewHoleForm2 = ({addNewHole, course}) => {
    const [holeNumber, setHoleNumber] = useState('');
    const [distanceInFeet, setDistanceInFeet] = useState('');
    const [par, setPar] = useState('');

//need to set the hole's ID (called 'id' in holes data array
//need to auto increment this, declare variable nextId to equal the length of holes array + 1)
//need to set the course ID (called 'courseId' in holes data array)
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (holeNumber && distanceInFeet && par) {
            const maxId = course.holes.reduce((max, hole) => Math.max(max, hole._id), 0);
            const nextId = maxId + 1;

            const newHole = {
                _id: nextId,
                holeNumber,
                par,  
                distanceInFeet,
                courseId: course.id,
            };

            addNewHole(newHole);
            setHoleNumber('');
            setPar('');
            setDistanceInFeet('');
        } else {
            console.log('invalid hole information');
        }
    };

    return (
        <div>
            <h4 className="add-hole">Add hole info</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='number'
                    onChange={(e) => setHoleNumber(e.target.value)}
                    value={holeNumber}/>
                <input
                    type='text'
                    placeholder='par'
                    onChange={(e) => setPar(e.target.value)}
                    value={par}/>
                <input
                    type='text'
                    placeholder='distance'
                    onChange={(e) => setDistanceInFeet(e.target.value)}
                    value={distanceInFeet}/>
                <div className="glow-container">
                    <button className="glow-on-hover" type='submit'>Submit Info</button>
                </div>
            </form>
        </div>
    )
}