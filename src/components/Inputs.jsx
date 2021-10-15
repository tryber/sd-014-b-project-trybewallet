import PropTypes from 'prop-types';
import React from 'react';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      desc: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ valor: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { valor, desc, value } = this.state;
    const { moeda } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="text" value={ valor } onChange={ this.handleChange } />
        </label>

        <label htmlFor="desc">
          Descrição
          <input id="desc" type="text" value={ desc } onChange={ this.handleChange } />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda" value={ value } onChange={ this.handleChange }>
            {moeda.map((code) => <option key={ code } value={ code }>{ code }</option>)}
          </select>
        </label>

        <label htmlFor="pay">
          Método de pagamento
          <select id="pay" value={ value } onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag" value={ value } onChange={ this.handleChange }>
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>

          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

Inputs.propTypes = {
  moeda: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func.isRequired,
  })).isRequired,
};

export default Inputs;
