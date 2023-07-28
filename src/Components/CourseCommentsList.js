import React from 'react';
import CourseComments from './CourseComments';

const CourseCommentsList = ({ commentList, courseId }) => {
    return (
        <div>
            {commentList
                .filter(courseComment => courseComment.courseId === courseId)
                .reverse()
                .map(courseComment => (
                    <CourseComments courseComment={courseComment} key={courseComment.courseId}/>
                ))}
        </div>
    );
};

export default CourseCommentsList;