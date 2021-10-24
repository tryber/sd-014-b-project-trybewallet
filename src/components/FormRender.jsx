import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Value from './Value';
import Currency from './Currency';
import Description from './Description';
import PayMethod from './PayMethod';
import Tag from './Tag';
import Expenses from './Expenses';

import fetchCurrency from '../services/fetchCurrency';
import { saveExpenses as saveExpensesAction } from '../actions/index';

class FormRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const exchangeRates = await fetchCurrency();
    const { saveExpenses } = this.props;
    saveExpenses({
      ...this.state,
      exchangeRates,
    });
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div>
        <form>
          <Value value={ value } handleChange={ handleChange } />
          <Description value={ description } handleChange={ handleChange } />
          <Currency value={ currency } handleChange={ handleChange } />
          <PayMethod value={ method } handleChange={ handleChange } />
          <Tag value={ tag } handleChange={ handleChange } />
          <Expenses handleClick={ handleClick } />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(saveExpensesAction(payload)),
});

Description.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormRender);
