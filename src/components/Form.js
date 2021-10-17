import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import Input from './Input';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '0',
      descricao: '',
      moeda: '',
      metdPagamento: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }


  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }


  async fetchApi() {
    const fetchApi = fetch('');
  }

  render() {
    const { valor, descricao, moeda, metdPagamento, tag } = this.state;
    return (
      <form>
        <Input
          htmlFor="valor"
          labelText="Valor"
          type="number"
          id="valor"
          name="valor"
          value={ valor }
          onChange={ this.handleChange }
        />
        <Input
          htmlFor="descricao"
          labelText="Descrição"
          type="text"
          id="descricao"
          name="descricao"
          value={ descricao }
          onChange={ this.handleChange }
        />
        <Select
          id="moeda"
          htmlFor="moeda"
          arrayOption={ [] }
          name="moeda"
          labelText="Moeda"
          value={ moeda }
          onChange={ this.handleChange }
        />
        <Select
          labelText="Método de pagamento"
          id="metdPagamento"
          htmlFor="metdPagamento"
          arrayOption={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          name="metdPagamento"
          value={ metdPagamento }
          onChange={ this.handleChange }
        />
        <Select
          labelText="Tag"
          id="tag"
          htmlFor="tag"
          arrayOption={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button">Enviar</button>
      </form>
    );
  }
}

Form.propTypes = {

};

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
