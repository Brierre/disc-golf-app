import React from 'react';
import CourseComments from './CourseComments';

const CourseCommentsList = ({ commentList, courseId }) => {
    console.log('commentList:', commentList);
    console.log('courseId:', courseId);
    return (
        <div>
            {commentList
                .filter((courseComment) => courseComment.courseId === courseId)
                .reverse()
                .map((courseComment) => (
                    <CourseComments courseComment={courseComment} key={courseComment.commentId}/>
                ))}
        </div>
    );
};

export default CourseCommentsList;