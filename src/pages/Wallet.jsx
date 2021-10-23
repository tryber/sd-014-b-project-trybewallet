import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';
import Table from '../components/Table';
import './styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    const { inEdit, expenses } = this.props;
    return (
      <>
        <Header />
        { inEdit ? <FormEdit /> : <Form /> }
        <section className="data-table">
          { expenses.length > 0 ? <Table /> : (
            <h2>Adicione suas despesas</h2>
          ) }
        </section>
      </>
    );
  }
}

Wallet.propTypes = {
  inEdit: PropTypes.bool,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Wallet.defaultProps = {
  inEdit: false,
};

const mapStateToProps = (state) => ({
  inEdit: state.wallet.editor,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
