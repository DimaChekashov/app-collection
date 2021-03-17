import React, { Component } from "react";
import "./App.css";
import InputsGroup from "./component/InputsGroup/InputsGroup";
import styled, { keyframes } from "styled-components";

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstColor: "rgb(255, 0, 0)",
            secondColor: "rgb(0, 255, 0)",
            thirdColor: "rgb(0, 0, 255)",
        };
        this.colorAnim = keyframes`
          0% { background-color: ${this.state.firstColor}; }
          33% { background-color: ${this.state.secondColor}; }
          66% { background-color: ${this.state.thirdColor}; }
          100% { background-color: ${this.state.firstColor}; }
          `;
        this.BackgroundApp = styled.div`
            background-color: ${this.state.firstColor};
            animation: ${this.colorAnim} 5s infinite linear; ;
        `;
        this.updateColor = this.updateColor.bind(this);
    }

    updateColor(value, name) {
        this.setState({
            [name]: value,
        });
    }

    render() {
        console.log(this.state);
        return (
            <this.BackgroundApp className="App">
                <InputsGroup
                    updateColor={(value) =>
                        this.updateColor(value, "firstColor")
                    }
                />
                <InputsGroup
                    updateColor={(value) =>
                        this.updateColor(value, "secondColor")
                    }
                />
                <InputsGroup
                    updateColor={(value) =>
                        this.updateColor(value, "thirdColor")
                    }
                />
            </this.BackgroundApp>
        );
    }
}

export default App;
