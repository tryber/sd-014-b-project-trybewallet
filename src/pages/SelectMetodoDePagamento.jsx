import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { method } from '../actions';

class SelectMetodoDePagamento extends React.Component {
  constructor() {
    super();
    this.state = {
      metodoPagamento: 'dinheiro',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value }, () => {
      const { enviaValue } = this.props;
      enviaValue(value);
    });
  }

  render() {
    const { metodoPagamento } = this.state;
    return (
      <label htmlFor="metodoPagamento">
        Método de pagamento
        <select
          id="metodoPagamento"
          onChange={ this.handleState }
          value={ metodoPagamento }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMetodoDePagamento.propTypes = {
  enviaValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  enviaValue: (payload) => dispatch(method(payload)),
});

export default connect(null, mapDispatchToProps)(SelectMetodoDePagamento);
