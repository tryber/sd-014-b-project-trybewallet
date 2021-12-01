import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCurrencies, updateExpense, 
  fetchApiExchange} from '../actions';
import Header from '../components/Header';
import Table from '../components/Table';
import ButtonComponent from '../components/Button';
import InputText from '../components/Input_text';
import RenderSelects from '../components/RenderSelects';

class Wallet extends React.Component {
  constructor (props) {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.insertState = this.insertState.bind(this);
    
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    const patch = 'https://economia.awesomeapi.com.br/json/all';
    const fetchApi = await fetch(patch);
    const result = await fetchApi.json();
    const filterCurrencies = Object.keys(result)
      . filter((currencie) => currencie !== 'USDT');
    getCurrencies(filterCurrencies);
  }

  handleChange( {target} ) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  resetState() {
    this.setState({ 
      value: '', 
      description: '', 
      currency: '', 
      method: '', 
      tag: '' });
  }

  handleSubmit(event) {
    const { getExpensives } = this.props;
    event.preventDefault();
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    getExpensives(this.state);
    this.resetState();
  }

  handleEdit() {
    const { value, description,currency, method, tag } = this.state;
    const { editExpense, updateExpense } = this.props;
    const valueExpense = {...editExpense, value, description, currency, method, tag };
    updateExpense(valueExpense);
  }

  insertState(expensive) {
    this.setState({ 
      value: expensive.value, 
      description: expensive.description, 
      currency: expensive.currency, 
      method: expensive.method, 
      tag: expensive.tag });
  }

  verifyIsEditing() {
    const { isEditing } = this.props;
    if (!isEditing) {
      return (
        <ButtonComponent
          title="Adicionar despesa"
          handleClick={ this.handleSubmit }
        />
      );
    } else {
      return (
        <ButtonComponent
          title="Editar despesa"
          handleClick={ this.handleEdit }
        />
      );
    }
  }


  render() {
    const { value, description, currency, method, tag } = this.state;
    return(
      <>
        <Header />
        <form>
          <section className="section-form">
            <InputText
              label="Valor" 
              value={ value }
              id="value"
              name="value"
              onChange={ this.handleChange }
            />
            <InputText
              label="Descrição" 
              value={ description }
              id="description"
              name="description"
              onChange={ this.handleChange }
            />
            <RenderSelects
              currency={ currency }
              method={ method }
              tag={ tag }
              handleChange={ this.handleChange }
            />
            { this.verifyIsEditing() }
          </section>
        </form>
        <Table updateState={ this.insertState } />
      </>
    );
  }
}

Wallet.propTypes = {
  getExpensives: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  editExpense: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }),
};

const mapStateToProps = (state) => ({
  editExpense: state.wallet.editExpense,
  isEditing: state.wallet.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  getExpensives: (state) => dispatch(fetchApiExchange(state)),
  updateExpense: (payload) => dispatch(updateExpense(payload)),
  getCurrencies: (payload) => dispatch(requestCurrencies(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Wallet) ;
