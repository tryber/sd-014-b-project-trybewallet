import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestMoedas } from '../actions';

class SelectMoedas extends React.Component {
  async componentDidMount() {
    const { salvaMoedas } = this.props;
    const MoedasAPI = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(MoedasAPI);
    const responseJson = await response.json();
    const moedas = await responseJson;
    const filtrandoApi = Object.keys(moedas).filter((moeda) => moeda !== 'USDT');
    salvaMoedas(filtrandoApi);
  }

  render() {
    const { moedas, value, onChange, name } = this.props;
    return (
      <label
        htmlFor="moeda"
      >
        Moeda
        <select
          value={ value }
          id="moedas"
          name={ name }
          onChange={ onChange }
        >
          { moedas.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  salvaMoedas: (payload) => dispatch(requestMoedas(payload)),
});

SelectMoedas.propTypes = {
  salvaMoedas: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMoedas);
