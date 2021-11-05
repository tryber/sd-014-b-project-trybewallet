import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { labelhtmlfor, description, optionone, optiontwo,
      optionthree, optionfour, optionfive } = this.props;
    return (
      <section>
        <label htmlFor={ labelhtmlfor }>
          { description }
          <select id={ labelhtmlfor }>
            <option>{ optionone }</option>
            <option>{ optiontwo }</option>
            <option>{ optionthree }</option>
            <option>{ optionfour }</option>
            <option>{ optionfive }</option>
          </select>
        </label>
      </section>
    );
  }
}

Select.propTypes = {
  labelhtmlfor: PropTypes.string,
  description: PropTypes.string,
  optionone: PropTypes.string,
  optiontwo: PropTypes.string,
  optionthree: PropTypes.string,
  optionfour: PropTypes.string,
  optionfive: PropTypes.string,
}.isRequired;

export default Select;
