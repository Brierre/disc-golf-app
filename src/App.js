import React from "react";
import './App.css';
import Course from './Course';

const dg_courses_endpoint = 'https://64aff992c60b8f941af4fdbe.mockapi.io/courses';

export default class App extends React.Component {
    constructor(props) {
        super(props); 
        this.addNewHole = this.addNewHole.bind(this);
        this.deleteHole = this.deleteHole.bind(this);
    }

    render() {
        const courses = this.state
            ? this.state.courses.map((course, index) => 
                <Course 
                    key={index}
                    data={course}
                    addNewHole={this.addNewHole}
                    deleteHole={this.deleteHole} />)
            : null;
            
            return (
                <div>
                    <h1>Disc Golf Course List</h1>
                    {courses}
                </div>
            );
    }

    componentDidMount() {
        fetch(dg_courses_endpoint)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    courses: data
                });
            });
    }

    deleteHole(e, course, hole) {
        const index = course.holes.indexOf(hole);
        course.holes.splice(index, 1);
        updateCourse(course)
            .then(() => {
                this.setState(state => {
                    for (let c of state.courses) {
                        if (c.id === course.id) {
                            c = course;
                            break;
                        }
                    }
                    return state;
                });
            });
        e.preventDefault();
    }

    addNewHole(e, course, hole) {
        course.holes.push(hole);
        updateCourse(course)
            .then(() => {
                this.setState(state => {
                    for (let c of state.courses) {
                        if (c.id === course.id) {
                            c = course;
                            break;
                        }
                    }
                    return state;
                });
            });
        e.preventDefault();
    }
}

function updateCourse(course) {
    return fetch(`${dg_courses_endpoint}/$course.id`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
    });
}