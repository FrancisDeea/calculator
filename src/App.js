import './App.scss';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Buttons />
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
            onClick={null}
            style={{backgroundColor: "#f78888"}}
          >
            C
          </button>
          <button
            id="divide"
            value="/"
            onClick={null}
            style={{}}
          >
            /
          </button>
        </div>
        <div className="row">
          <button
            id="seven"
            value="7"
            onClick={null}
          >
            7
          </button>
          <button
            id="eight"
            value="8"
            onClick={null}
          >
            8
          </button>
          <button
            id="nine"
            value="9"
            onClick={null}
          >
            9
          </button>
          <button
            id="multiply"
            value="X"
            onClick={null}
          >
            X
          </button>
        </div>
        <div className="row">
          <button
            id="four"
            value="4"
            onClick={null}
          >
            4
          </button>
          <button
            id="five"
            value="5"
            onClick={null}
          >
            5
          </button>
          <button
            id="six"
            value="6"
            onClick={null}
          >
            6
          </button>
          <button
            id="subtract"
            value="-"
            onClick={null}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            id="one"
            value="1"
            onClick={null}
          >
            1
          </button>
          <button
            id="two"
            value="2"
            onClick={null}
          >
            2
          </button>
          <button
            id="three"
            value="3"
            onClick={null}
          >
            3
          </button>
          <button
            id="add"
            value="+"
            onClick={null}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            id="zero"
            value="0"
            onClick={null}
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
            onClick={null}
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
