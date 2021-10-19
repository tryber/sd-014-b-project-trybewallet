import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableCosts extends React.Component {
  render() {
    const { listOfExpenses } = this.props;
    console.log(listOfExpenses);
    return (
      <p>aqui</p>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfExpenses: state.wallet.expenses,
});

TableCosts.propTypes = {
  listOfExpenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(TableCosts);
