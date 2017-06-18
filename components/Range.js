import React, { Component } from 'react';

import InputRange from 'react-input-range';

class Range extends Component {
  constructor(props){
		super(props);
    this.state = {
             value: { min: this.props.min, max: this.props.max },
    };
	}
handleChange({value}){
  this.setState({ value })
  this.props.handleChangeRange({value})
}


  render() {
    const divStyle = {
  width: '50%',
  margin: "auto",
};
    return (
      <div className="container rangebar">
        <p className="rangestyle">Price Range:</p>

      <InputRange
        maxValue={1200}
        minValue={0}
        value={this.state.value}
        onChange={value => this.handleChange({ value })} />
    </div>
    );
  }
}

export default Range;
