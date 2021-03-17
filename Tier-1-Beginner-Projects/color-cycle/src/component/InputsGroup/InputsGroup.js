import React, { Component } from "react";
import "./InputsGroup.css";

class InputsGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            red: 255,
            green: 0,
            blue: 0,
        };

        this.handleChangeColor = this.handleChangeColor.bind(this);
    }

    handleChangeColor(event, color) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [color]: value,
        });

        const newState = Object.assign({}, this.state, {
            [color]: value,
        });
        const { red, green, blue } = newState;
        this.props.updateColor(`rgb(${red}, ${green}, ${blue}})`);
    }

    render() {
        return (
            <div className="inputs">
                <div className="input-group">
                    <label>Red</label>
                    <input
                        className="input"
                        type="number"
                        min="0"
                        max="255"
                        value={this.state.red}
                        onChange={(e) => {
                            this.handleChangeColor(e, "red");
                        }}
                    />
                </div>
                <div className="input-group">
                    <label>Green</label>
                    <input
                        className="input"
                        type="number"
                        min="0"
                        max="255"
                        value={this.state.green}
                        onChange={(e) => {
                            this.handleChangeColor(e, "green");
                        }}
                    />
                </div>
                <div className="input-group">
                    <label>Blue</label>
                    <input
                        className="input"
                        type="number"
                        min="0"
                        max="255"
                        value={this.state.blue}
                        onChange={(e) => {
                            this.handleChangeColor(e, "blue");
                        }}
                    />
                </div>
                <div className="result">
                    background-color: rgb({this.state.red},{this.state.green},{" "}
                    {this.state.blue});
                </div>
            </div>
        );
    }
}

export default InputsGroup;
