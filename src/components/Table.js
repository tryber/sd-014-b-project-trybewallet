import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableRows from './TableRows';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <TableRows key={ expense.id } expenses={ expense } />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Table.defaultProps = {

};
