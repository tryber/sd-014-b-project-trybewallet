import React from 'react';
import { connect } from 'react-redux';

class SelectCurrencyForm extends React.Component {
  render() {
    return (
      <label htmlFor="currency-form-label">
        Moeda
        <select id="currency-form-label">
          <option value="BRL">BRL</option>
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(SelectCurrencyForm);
