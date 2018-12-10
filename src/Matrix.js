import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: ""
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} test={this.anotherColor}  />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  updateSelectedColor = (event) => {
    let color = event.target.style.backgroundColor
    this.setState({
      selectedColor: color
    })
    return color
  }

  anotherColor = () => {
    return this.state.selectedColor
  }


  render() {
    return (
      <div id="app">
        <ColorSelector update={this.updateSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
