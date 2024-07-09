import React from "react";
import "./ConfirmDelete.css";

const ConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-delete-container">
      <div className="confirm-delete">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this user?</p>
        <button onClick={onConfirm} className="confirm-btn">
          Yes
        </button>
        <button onClick={onCancel} className="cancel-btn">
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
