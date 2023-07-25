import React from 'react';
import { Course2 } from './Course2.js';
import { coursesAPI } from '../rest/CoursesAPI.js';

export class CourseList extends React.Component {
    state = {
        courses: []
    };

    componentDidMount() {
        this.fetchCourses();
    };

    fetchCourses = async () => {
        const courses = await coursesAPI.get();  
        this.setState({ courses });  
    };

    updateCourse = async (updatedCourse) => {
        await coursesAPI.put(updatedCourse);
        this.fetchCourses();
    };

    render() {
        return (
            <div className="course-list">
                {this.state.courses.map((course) => (
                    <Course2
                        course={course}
                        key={course.id}
                        updateCourse={this.updateCourse} />
                ))}
            </div>
        )
    }

}