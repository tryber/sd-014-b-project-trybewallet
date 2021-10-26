import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expansesSubmit } from '../actions/submitExpanses';

class ButtonAdd extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id } = this.state;
    const { SubmitExpanses, requestCoin, attCoin } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates } = this.props;
    const gasto = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };
    SubmitExpanses(gasto);
    this.setState({
      id: id + 1,
    });
    requestCoin();
    attCoin();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

ButtonAdd.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string,
  exchangeRates: PropTypes.string,
  id: PropTypes.string,
  method: PropTypes.string,
  tag: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  SubmitExpanses: (expenses) => (dispatch(expansesSubmit(expenses))),
});

export default connect(null, mapDispatchToProps)(ButtonAdd);
