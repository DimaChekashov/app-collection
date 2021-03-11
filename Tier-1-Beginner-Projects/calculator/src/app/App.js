import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            result: "",
            action: "",
            computation: "0",
        };

        this.handleRange = this.handleRange.bind(this);
        this.handleCalcAction = this.handleCalcAction.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    handleCalcAction(action) {
        if (this.state.computation === "0") {
            return;
        }
        this.setState({
            action: action,
        });
        if (!this.state.result) {
            this.setState({
                result: this.state.computation,
                computation: "0",
            });
        } else {
            this.handleEquals();
        }
    }

    handleRange(num) {
        if (!(this.state.computation + num === "00")) {
            if (this.state.computation === "0") {
                this.setState({
                    computation: "" + num,
                });
            } else {
                this.setState({
                    computation: this.state.computation + num,
                });
            }
        }
    }

    handleClear() {
        if (!(this.state.computation === "0")) {
            if (
                this.state.computation.length === 1 &&
                !(this.state.computation === "0")
            ) {
                this.setState({
                    computation: "0",
                });
            } else {
                this.setState({
                    computation: this.state.computation.substr(
                        0,
                        this.state.computation.length - 1
                    ),
                });
            }
        }
    }
    handleClearAll() {
        this.setState({
            result: "",
            action: "",
            computation: "0",
        });
    }

    handleEquals() {
        switch (this.state.action) {
            case "+":
                return this.setState({
                    result: +this.state.result + +this.state.computation,
                    computation: "0",
                });
            case "-":
                return this.setState({
                    result: +this.state.result - +this.state.computation,
                    computation: "0",
                });
            case "*":
                return this.setState({
                    result: +this.state.result * +this.state.computation,
                    computation: "0",
                });
            case "/":
                return this.setState({
                    result: +this.state.result / +this.state.computation,
                    computation: "0",
                });
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="calc">
                <div className="calc-top">
                    <div className="calc-fields">
                        <div className="calc-result">{this.state.result}</div>
                        <div className="calc-computation">
                            {this.state.computation}
                        </div>
                    </div>
                    <div className="calc-action-now">{this.state.action}</div>
                </div>
                <div className="calc-actions">
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(1)}
                    >
                        1
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(2)}
                    >
                        2
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(3)}
                    >
                        3
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(4)}
                    >
                        4
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(5)}
                    >
                        5
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(6)}
                    >
                        6
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(7)}
                    >
                        7
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(8)}
                    >
                        8
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(9)}
                    >
                        9
                    </button>
                    <button
                        className="calc-btn"
                        onClick={() => this.handleRange(0)}
                    >
                        0
                    </button>
                </div>
                <div className="calc-actions">
                    <button
                        className="calc-btn calc-plus"
                        onClick={() => this.handleCalcAction("+")}
                    >
                        +
                    </button>
                    <button
                        className="calc-btn calc-minus"
                        onClick={() => this.handleCalcAction("-")}
                    >
                        -
                    </button>
                    <button
                        className="calc-btn calc-multi"
                        onClick={() => this.handleCalcAction("*")}
                    >
                        *
                    </button>
                    <button
                        className="calc-btn calc-divi"
                        onClick={() => this.handleCalcAction("/")}
                    >
                        /
                    </button>
                    <button
                        className="calc-btn calc-clear"
                        onClick={this.handleClear}
                    >
                        C
                    </button>
                    <button
                        className="calc-btn calc-all-clear"
                        onClick={this.handleClearAll}
                    >
                        AC
                    </button>
                    <button
                        className="calc-btn calc-equals"
                        onClick={this.handleEquals}
                    >
                        =
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
