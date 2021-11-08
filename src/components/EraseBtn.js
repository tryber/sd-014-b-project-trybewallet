import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { eraseExpense } from '../actions';

const EraseBtn = ({ spend }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(eraseExpense(spend));
  };

  return (
    <button
      type="button"
      data-testid="delete-btn"
      onClick={ handleClick }
    >
      Excluir
    </button>
  );
};

EraseBtn.propTypes = {
  spend: PropTypes.shape({}).isRequired,
};

export default EraseBtn;
