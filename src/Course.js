import React from "react";
import NewHoleForm from './NewHoleForm';

export default class Course extends React.Component {
    render() {
        const holes = this.props.data.holes
            ? this.props.data.holes.map((hole, index) =>
                <li key={index}>
                    Hole: {hole.number} <br/>
                    Distance: {hole.distance} <br/> 
                    Par: {hole.par} <br/>
                    <button onClick={e =>
                        this.props.deleteHole(e, this.props.data, hole)}>Delete
                    </button>
                </li>)
            : null;
            return (
                <div>
                    <h2 className="course-name">{this.props.data.fullName}</h2>
                    <h3 className="course-info">{this.props.data.area}</h3>
                    <h3 className="course-info">{this.props.data.city}</h3>
                    <h3 className="course-info">Number of holes in course: {this.props.data.numHoles}</h3>
                    <ul>
                        {holes}
                    </ul>
                    <NewHoleForm
                        addNewHole={this.props.addNewHole} data={this.props.data} />
                </div>
            );
    }
}















