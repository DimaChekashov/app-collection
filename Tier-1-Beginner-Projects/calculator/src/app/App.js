import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
      super();

      this.state = {
        result: 0
      }
    }

    onSum() {

    }

    render() {
        return (
            <div className="calc">
                <div className="calc-result"></div>
                <div className="calc-actions">
                    <button className="calc-btn">1</button>
                    <button className="calc-btn">2</button>
                    <button className="calc-btn">3</button>
                    <button className="calc-btn">4</button>
                    <button className="calc-btn">5</button>
                    <button className="calc-btn">6</button>
                    <button className="calc-btn">7</button>
                    <button className="calc-btn">8</button>
                    <button className="calc-btn">9</button>
                    <button className="calc-btn">0</button>
                </div>
                <div className="calc-actions">
                    <button className="calc-btn calc-plus">+</button>
                    <button className="calc-btn calc-minus">-</button>
                    <button className="calc-btn calc-multi">*</button>
                    <button className="calc-btn calc-divi">/</button>
                    <button className="calc-btn calc-clear">C</button>
                    <button className="calc-btn calc-all-clear">AC</button>
                    <button className="calc-btn calc-equals">=</button>
                </div>
            </div>
        );
    }
}

export default App;
