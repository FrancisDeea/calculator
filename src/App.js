import './App.scss';
import React from 'react';

const operators = /[x÷+-]/;
const numbers = /[0123456789]/;
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      formula: [],
      previous: [],
      currentValue: 0,
      operator: "",
      result: 0
    }
  }


  handleClear() {
    this.setState({
      formula: [],
      previous: [],
      currentValue: 0,
      operator: "",
      result: 0
    })
  }

  handleClick(e) {
    const value = e.target.value;
    switch(value) {
      case String(value.match(numbers)):
        this.setState(state => ({
          currentValue: Number(state.currentValue + value)
        }));
        break;

      case String(value.match(operators)):
        if (this.state.currentValue !== 0) {
          this.setState(state => ({
            previous: [state.formula + " " + state.currentValue],
            formula: [state.formula + " " + state.currentValue + " " + value],
            currentValue: 0,
            operator: value,
          }));
        } else if (this.state.operator !== value) {
          this.setState(state => ({
            formula: [state.previous + " " + value],
            operator: value
          }))
        }
        break;
      
      case String(value.match("=")):
        this.handleClear();
        break;
    }
  }
  

  render() {
    return (
      <div id="calculator">
        <Display 
          result={this.state.result} 
          input={this.state.formula}
          operator={this.state.operator}
          current={this.state.currentValue}
        />
        <Buttons 
          onClick={this.handleClick}
          getClear={this.handleClear}
        
        />
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="dp-container">
        <div 
          id="formula" 
        >
          {this.props.input}
        </div>
        <div
          id="display"
        >
          {
            this.props.result !== 0 
            ? this.props.result 
            : this.props.current
              ? this.props.current
              : this.props.operator
          }
        </div>
      </div>
    )
  }
}
class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="btn-container">
        <div className="row">
          <button
            id="clear"
            value="C"
            onClick={this.props.getClear}
            style={{backgroundColor: "#f78888"}}
          >
            C
          </button>
          <button
            id="divide"
            value="÷"
            onClick={this.props.onClick}
            style={{}}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            id="seven"
            value="7"
            onClick={this.props.onClick}
          >
            7
          </button>
          <button
            id="eight"
            value="8"
            onClick={this.props.onClick}
          >
            8
          </button>
          <button
            id="nine"
            value="9"
            onClick={this.props.onClick}
          >
            9
          </button>
          <button
            id="multiply"
            value="x"
            onClick={this.props.onClick}
          >
            x
          </button>
        </div>
        <div className="row">
          <button
            id="four"
            value="4"
            onClick={this.props.onClick}
          >
            4
          </button>
          <button
            id="five"
            value="5"
            onClick={this.props.onClick}
          >
            5
          </button>
          <button
            id="six"
            value="6"
            onClick={this.props.onClick}
          >
            6
          </button>
          <button
            id="subtract"
            value="-"
            onClick={this.props.onClick}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            id="one"
            value="1"
            onClick={this.props.onClick}
          >
            1
          </button>
          <button
            id="two"
            value="2"
            onClick={this.props.onClick}
          >
            2
          </button>
          <button
            id="three"
            value="3"
            onClick={this.props.onClick}
          >
            3
          </button>
          <button
            id="add"
            value="+"
            onClick={this.props.onClick}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            id="zero"
            value="0"
            onClick={this.props.onClick}
          >
            0
          </button>
          <button
            id="decimal"
            value="."
            onClick={null}
          >
            .
          </button>
          <button
            id="equals"
            value="="
            onClick={this.props.onClick}
            style={{flexBasis: 160, backgroundColor: "#88f0f7"}}
          >
            =
          </button>
        </div>
      </div>
    )
  }
}
function App() {
  return (
    <Calculator />
  )
}

export default App;

