import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Label extends Component {

    
    render() {
        const {name, type, dataTestid, minlength, required, handleChange } = this.props;
        const tinyName = name.toLowerCase();
        console.log(tinyName);
        return (
            <label htmlFor={tinyName}>
                {`${name}:`}
                <input
                  onChange={handleChange} 
                  name={tinyName} 
                  type={type}
                  data-testid={dataTestid} 
                  minlength={minlength}
                  required={required}
                />
            </label>
        )
    }
}

Label.propTypes = {
  dataTestid: PropTypes.string,
  minlength: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
}
