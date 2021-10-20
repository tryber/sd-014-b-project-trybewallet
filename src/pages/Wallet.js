import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { fetchApi } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  render() {
    const { user } = this.props;
    return (

      <section>
        <header>
          <span data-testid="email-field">{user}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <ExpenseForm />
      </section>

    );
  }
}
Wallet.propTypes = {
  user: PropTypes.string.isRequired,
  requestApi: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({ user: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
