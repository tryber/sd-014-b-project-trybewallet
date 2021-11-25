import React from 'react';
import PropTypes from 'prop-types';
import Input_text from './Input_text';
import Input_Text from './Input_text';
import { Button } from 'bootstrap';
import Render_selects from './Render_selects';
import { connect } from 'react-redux';

class Form_expenses extends React.Component {
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
    this.resetState = this.resetState.bind(this);
    
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

  render() {
    const { value, description, currency, method, tag } = this.state;
    return(
      <form>
        <Input_text
          label="Valor" 
          value={ value }
          id="value"
          name="value"
          onChange={ this.handleChange }
        />
        <Input_Text
          label="Descrição" 
          value={ description }
          id="description"
          name="description"
          onChange={ this.handleChange }
        />
        <Render_selects 
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <Button 
          title="Adicionar despesa"
          handleClick={ this.handleSubmit }
        />
        <Button 
          title="Editar Gasto"
          handleClick={ this.handleEdit }
        />
      </form>
    );
  }
}

Form_expenses.propTypes = {
  getExpensives: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
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
});

const mapDispatchToProps = (dispatch) => ({
  getExpensives: (state) => dispatch(fetchApiExchange(state)),
  updateExpense: (payload) => dispatch(updateExpense(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Form_expenses) ;