import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { Coin } = this.props;
    return (
      <option>{ Coin }</option>
    );
  }
}

Select.propTypes = {
  Coin: PropTypes.string.isRequired,
};
export default Select;
