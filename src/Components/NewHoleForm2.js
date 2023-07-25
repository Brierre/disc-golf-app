import React, { useState } from 'react';

export const NewHoleForm2 = (props) => {
    const [number, setNumber] = useState('');
    const [distance, setDistance] = useState('');
    const [par, setPar] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (number && distance && par) {
            props.addNewHole({number, distance, par});
            setNumber('');
            setDistance('');
            setPar('');
        } else {
            console.log('invalid hole information');
        }
    };

    return (
        <div>
            <h4>Add new hole to course</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='number'
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}/>
                <input
                    type='text'
                    placeholder='distance'
                    onChange={(e) => setDistance(e.target.value)}
                    value={distance}/>
                <input
                    type='text'
                    placeholder='par'
                    onChange={(e) => setPar(e.target.value)}
                    value={par}/>
                <button type='submit'>Submit Hole Information</button>
            </form>
        </div>
    )
}