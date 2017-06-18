import React, { Component } from 'react';

class Filter extends Component {
  handleChange({target}){
       this.props.handleChangeShow(target.value)
   }

  render() {
    return (
          <div className="filter-select">
          <select onChange={this.handleChange.bind(this)}>
            <option value="showall">All Categories</option>
            <option value="Fashion">Fashion</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Camera">Camera</option>
            <option value="Watch">Watch</option>


          </select>
          </div>

    );
  }
}

export default Filter;
