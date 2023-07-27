import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseList } from './Components/CourseList.js';
import Navigate from './Components/Navigate.js';
import discgolfimg from './pexels-kevin-burnell-15579187.jpg';
import './App.css';

class App2 extends Component {
    render() {
        return (
            <div className="application">
                <img src={discgolfimg} alt="discgolf" width="100%"/>
                <div>
                    <Navigate />
                </div>
                <div>
                    <h2 className="courses-title">Disc Golf Courses</h2>
                    <CourseList />
                </div>
            </div>
        )
    }
}

export default App2;