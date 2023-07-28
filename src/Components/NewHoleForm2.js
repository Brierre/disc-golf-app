import React, { useState } from 'react';

export const NewHoleForm2 = ({addNewHole, course}) => {
    const [holeNumber, setHoleNumber] = useState('');
    const [distanceInFeet, setDistanceInFeet] = useState('');
    const [par, setPar] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (holeNumber && distanceInFeet && par) {
            const maxId = course.holes.reduce((max, hole) => Math.max(max, hole.id), 0);
            const nextId = maxId + 1;

            const newHole = {
                id: nextId,
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
                <label htmlFor='hole-number'>
                <input 
                    className='form-elements'
                    type='text'
                    placeholder='number'
                    onChange={(e) => setHoleNumber(e.target.value)}
                    value={holeNumber}/></label>
                <label htmlFor='par'>
                <input
                    className='form-elements'
                    type='text'
                    placeholder='par'
                    onChange={(e) => setPar(e.target.value)}
                    value={par}/></label>
                <label htmlFor='distance-in-feet'>
                <input
                    className='form-elements'
                    type='text'
                    placeholder='distance'
                    onChange={(e) => setDistanceInFeet(e.target.value)}
                    value={distanceInFeet}/></label>
                <div className="glow-container">
                    <button className="glow-on-hover" type='submit'>Submit Info</button>
                </div>
            </form>
        </div>
    )
}