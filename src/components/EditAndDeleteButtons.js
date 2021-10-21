import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import '../pages/WalletPage.css';

class EditAndDeleteButtons extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="edit-button">
          <FaPencilAlt />
        </button>
        <button type="button" data-testid="delete-btn" className="delete-button">
          <FaTrashAlt />
        </button>
      </div>
    );
  }
}

export default EditAndDeleteButtons;
