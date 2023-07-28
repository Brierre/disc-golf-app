import React, { useState, useEffect } from 'react';
import { Course2 } from './Course2.js';
import { coursesAPI } from '../rest/CoursesAPI.js';
import { courseComments } from '../assets/data/courseComments.jsx';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [commentList, setCommentList] = useState(courseComments);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const coursesData = await coursesAPI.get();
        setCourses(coursesData);
    };

    const updateCourse = async (updatedCourse) => {
        const courseIndex = courses.findIndex((course) => course.id === updatedCourse.id);
        if (courseIndex !== -1) {
            // Update the course in the local state
            setCourses((prevCourses) => {
                const updatedCourses = [...prevCourses];
                updatedCourses[courseIndex] = updatedCourse;
                return updatedCourses;
            });

            await coursesAPI.put(updatedCourse);
            // fetchCourses();
        };
    }
        const addComment = ({ courseId, comment, author }) => {
            const nextId = Math.max(...commentList.map((comment) => comment.commentId)) + 1;

            const newComment = {
                courseId: courseId,
                commentId: nextId,
                comment: comment,
                author: author,
            };
            setCommentList([...commentList, newComment]);
            // Update the course with the new comment
            const updatedCourse = courses.find((course) => course.id === courseId);
            if (updatedCourse) {
                updatedCourse.commentList.push(newComment);
                updateCourse(updatedCourse);
            }
        };

        return (
            <div className="course-list">
                {courses.map((course) => (
                    <Course2
                        course={course}
                        key={course.id}
                        commentList={commentList}
                        addComment={addComment}
                        updateCourse={updateCourse}
                    />
                ))}
            </div>
        );
    }

export default CourseList;