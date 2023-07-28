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
        await coursesAPI.put(updatedCourse);
        fetchCourses();
    };

    const addComment = ({ courseId, comment, author }) => {
        const nextId = Math.max(...commentList.map((comment) => comment.commentId)) +1;

        const newComment = {
            courseId: courseId,
            commentId: nextId,
            comment: comment,
            author: author,
        };
        setCommentList([...commentList, newComment]);
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

// export class CourseList extends React.Component {
//     state = {
//         courses: []
//     };

//     componentDidMount() {
//         this.fetchCourses();
//     };

//     fetchCourses = async () => {
//         const courses = await coursesAPI.get();  
//         this.setState({ courses });  
//     };

//     updateCourse = async (updatedCourse) => {
//         await coursesAPI.put(updatedCourse);
//         this.fetchCourses();
//     };

//     render() {
//         const [commentList, setCommentList] = useState(courseComments);
//         const addComment = ({courseId, comment, author}) => {
//             const nextId = Math.max(...commentList.map(comment => comment.commentId)) + 1;

//             const newComment = {
//                 courseId: courseId,
//                 commentId: nextId,
//                 comment: comment,
//                 author: author
//             };
//             setCommentList([...commentList, newComment]);
//         };

//         return (
//             <div className="course-list">
//                 {this.state.courses.map((course) => (
//                     <Course2
//                         course={course}
//                         key={course.id}
//                         commentList={commentList}
//                         addComment={addComment}
//                         updateCourse={this.updateCourse} />
//                 ))}
//             </div>
//         )
//     }

// }