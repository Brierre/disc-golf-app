import React from 'react';
import { NewHoleForm2 } from './NewHoleForm2.js';

export const Course2 = (props) => {
    const { course, updateCourse } = props;

    const deleteHole = (holeId) => {
        const updatedCourse = {
            ...course,
            holes: course.holes.filter((x) => x._id !== holeId)
        };
        updateCourse(updatedCourse);
    }

    const addNewHole = (hole) => updateCourse({ ...course, holes: [...course.holes, hole]});

    const holes = () => {
        <ul>
            {course.holes.map((hole, index) => (
                <li key={index}>
                    <label> {`Hole: ${hole.number} Distance: ${hole.distance} Par: ${hole.par}`}</label>
                    <button onClick={(e) => deleteHole(hole._id)}>Delete</button>
                </li>
                ))}
        </ul>
    };
    return (
        <div>
            <h1 className="course-info-name">{course.fullName}</h1>
            <h2 className="course-info">Area: {course.area}</h2>
            <h2 className="course-info">City: {course.city}</h2>
            <h2 className="course-info">Number of holes in course: {course.numHoles}</h2>
            {
                holes({ holes, courseId: course.id, deleteHole})
            }
            <NewHoleForm2 addNewHole={addNewHole} />
        </div>
    );
};