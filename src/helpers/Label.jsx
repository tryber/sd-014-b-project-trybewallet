import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Label extends Component {

    
    render() {
        const {name, type, dataTestid, minlength, required, handleChange } = this.props;
        return (
            <label htmlFor={name}>
                {`${name}:`}
                <input
                    onChange={handleChange} 
                    name={name} 
                    type={type} 
                    data-testid={dataTestid} 
                    minlength={minlength}
                    required={required} 
                    onChange={handleChange}
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
