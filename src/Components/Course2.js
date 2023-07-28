import React, { useState } from 'react';
import { NewHoleForm2 } from './NewHoleForm2.js';
import CourseCommentsForm from './CourseCommentsForm.js';
import CourseCommentsList from './CourseCommentsList.js';
import EditHoleForm from './EditHoleForm.js';
import frisbee from '../noun-frisbee-871431.png';

export const Course2 = (props) => {
    const { course, commentList, updateCourse, addComment } = props;
    const [editedHole, setEditedHole] = useState(null);

    console.log('commentList', commentList);
    const handleEditHole = (hole) => {
        setEditedHole(hole);
    };

    const handleSaveEditedHole = (updatedHole) => {
        updateHole(updatedHole);
        setEditedHole(null);
    };

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

    const updateHole = (updatedHole) => {
        const updatedHoles = course.holes.map((hole) => {
            if (hole.id === updatedHole.id) {
                return updatedHole;
            }
            return hole;
        });

        const updatedCourse = {
            ...course,
            holes: updatedHoles,
        };
        updateCourse(updatedCourse);
    };

    const HolesComponent = () => {
        const sortHolesNumerically = (holes) => {
            return holes.slice().sort((a, b) => a.holeNumber - b.holeNumber);
        };

        // Check if course.holes is empty or not before rendering
        const holesToRender = course.holes && course.holes.length > 0 ? sortHolesNumerically(course.holes) : [];
        return (
            <ul className="holes-list">
                {holesToRender.map((hole, index) => (
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
                        <button
                            className="frisbee"
                            caption="edit"
                            onClick={() => handleEditHole(hole)}
                            style={{
                                backgroundImage: `url(${frisbee})`,
                                backgroundSize: "cover",
                                width: "30px",
                                height: "30px",
                                border: "none",
                                cursor: "pointer",
                                position: "relative",
                                marginLeft: "10px", // Add some spacing between buttons
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: "-2px",
                                    left: "2px",
                                    color: "black",
                                    fontSize: "8px",
                                    fontWeight: "bold",
                                }}
                            >
                                Edit
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        );
    };
        return (
            <div className="course">
                <h3 className="course-info-name">{course.fullName}</h3>
                <h5 className="course-info">Area: {course.area}</h5>
                <h5 className="course-info">City: {course.city}</h5>
                <h5 className="course-info">Number of holes in course: {course.numHoles}</h5>

                <HolesComponent />
                <NewHoleForm2 addNewHole={addNewHole} course={course} />
                {editedHole && (
                    <div>
                        <h4 className="edit-hole">Edit Hole</h4>
                        <EditHoleForm
                            editedHole={editedHole}
                            onSave={handleSaveEditedHole}
                            onCancel={() => setEditedHole(null)}
                        />
                    </div>
                )}
                <CourseCommentsForm
                    commentList={course.commentList}
                    courseId={course.id}
                    addComment={addComment}
                />
                <CourseCommentsList
                    commentList={commentList}
                    courseId={course.id}
                />
            </div>
        );
    }
