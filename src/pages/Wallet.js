import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import PaymentMethod from '../Components/PaymentMethod';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      description: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { email } = this.props;
    const { value, description } = this.state;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">0</span>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="text"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="expenseType">
            Moeda
            <select id="expenseType">
              <option>BRL</option>
            </select>
          </label>
          <PaymentMethod />
          <label htmlFor="cat">
            Tag
            <select id="cat">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
