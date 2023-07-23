import React from "react";


export default class NewHoleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            distance: '',
            par: ''
        }

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleParChange = this.handleParChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNumberChange(e) {
        this.setState({number: e.target.value});
    }

    handleDistanceChange(e) {
        this.setState({distance: e.target.value});
    }

    handleParChange(e) {
        this.setState({par: e.target.value});
    }

    handleClick(e) {
        this.props.addNewHole(e, this.props.data,
            {number: this.state.number, distance: this.state.distance, par: this.state.par});
        this.setState({number: '', distance: '', par: ''});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="hole number" onChange={this.handleNumberChange} value={this.state.number}/>
                <input type="text" placeholder="distance" onChange={this.handleDistanceChange} value={this.state.distance}/>
                <input type="text" placeholder="par" onChange={this.handleParChange} value={this.state.par}/>
                <button onClick={this.handleClick}>Add Hole to Course</button>
            </div>
        )
    }
}