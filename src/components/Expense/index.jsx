import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Expense extends Component {
  render() {
    const { description, value, method, tag } = this.props;
    return (
      <div>
        <section>
          {description}
        </section>
        <section>
          <div>{value}</div>
          <div>{method}</div>
          <div>{tag}</div>
        </section>
      </div>
    );
  }
}

Expense.propTypes = {
  description: PropTypes.string,
  method: PropTypes.string,
  tag: PropTypes.string,
  value: PropTypes.number,
}.isRequired;
