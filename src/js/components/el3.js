import React, {Component} from 'react';


class El3 extends Component {
    constructor() {
        super();
        this.state = {
            value: "Click to change my name",
            buffer: ""
        };
        this.setName = this.setName.bind(this);
        this.setBuffer = this.setBuffer.bind(this);
    }
    setBuffer(e){
        this.setState({ buffer: e.target.value })
    }
    setName() {
        this.setState({value: this.state.buffer})
    }
    render() {
        return (
            <div className= "input-group mb-3 ">
                <input maxLength="30" placeholder="Type new name" id="input-area"
                       onChange={this.setBuffer} className="form-control"/>
                <input type="button" value={this.state.value} onClick={this.setName} className="btn"/>
            </div>
        )
    }
}

export default El3;