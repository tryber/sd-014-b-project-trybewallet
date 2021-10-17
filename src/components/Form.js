import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import Input from './Input';
import MetdPagamento from './MetdPagamento';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '0',
      descricao: '',
      moeda: '',
      metdPagamento: '',
      tag: '',
      arrayApi: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async fetchApi() {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const jsonApi = await fetchApi.json();
    this.setState(() => ({
      arrayApi: jsonApi,
    }));
  }

  render() {
    const { valor, descricao, moeda, metdPagamento, tag, arrayApi } = this.state;
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
        <MetdPagamento
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
