import React from 'react';
import { NewHoleForm2 } from './NewHoleForm2.js';
import CourseCommentsForm from './CourseCommentsForm.js';
import CourseCommentsList from './CourseCommentsList.js';
import frisbee from '../noun-frisbee-871431.png';

export const Course2 = (props) => {
    const { course, updateCourse, addComment } = props;

    const deleteHole = (holeId) => {
        const updatedHoles = course.holes.filter((hole) => hole.id !== holeId);
        const updatedCourse = {
            ...course,
            holes: updatedHoles,
        };
        updateCourse(updatedCourse);
    };

    const addNewHole = (hole) => {
        const maxId = course.holes.reduce((max, hole) => Math.max(max, hole.id), 0);
        const nextId = maxId + 1;

        const newHole = {
            id: nextId,
            holeNumber: hole.holeNumber,
            par: hole.par,
            distanceInFeet: hole.distanceInFeet,
            courseId: course.id,
        };
        
        const updatedCourse = {
            ...course, 
            holes: [...course.holes, newHole] 
        };
        updateCourse(updatedCourse);
    };

    const HolesComponent = () => (
        <ul className="holes-list">
            {(course.holes || []).map((hole, index) => (
                <li key={index}>
                    <label>{`Hole: ${hole.holeNumber} / Par: ${hole.par} / Distance: ${hole.distanceInFeet} feet`}</label>
                    <button className="frisbee" caption="delete" onClick={() => deleteHole(hole.id)}
                        style={{
                            backgroundImage: `url(${frisbee})`,
                            backgroundSize: "cover",
                            width: "30px",
                            height: "30px",
                            border: "none",
                            cursor: "pointer",
                            position: "relative",
                        }}>
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px', // Adjust the vertical position of the caption
                            left: '2px',   // Adjust the horizontal position of the caption
                            color: 'black', // Optionally, set the color of the caption text
                            fontSize: '8px', // Optionally, set the font size of the caption text
                            fontWeight: 'bold', // Optionally, set the font weight of the caption text
                        }}>
                            Delete
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="course">
            <h3 className="course-info-name">{course.fullName}</h3>
            <h5 className="course-info">Area: {course.area}</h5>
            <h5 className="course-info">City: {course.city}</h5>
            <h5 className="course-info">Number of holes in course: {course.numHoles}</h5>
            <HolesComponent />
            <NewHoleForm2 addNewHole={addNewHole} course={course} />
            <CourseCommentsForm 
                commentList={course.commentList}
                courseId={course.id}
                addComment={addComment}
            />
            <CourseCommentsList 
                commentList={course.commentList} 
                courseId={course.id} 
            />
        </div>
    );
};