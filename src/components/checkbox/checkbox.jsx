import React from 'react';
import './checkbox.scss';

export const Checkbox = ({
  onClick, checked, onDelete, label, onKeyUp,
}) => {
  const handleChange = () => {
    onClick(); // Toggle the checked state when the checkbox is clicked
  };

  return (
    <div className="checkbox">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked={checked} // Set aria-checked to the value of 'checked'
        className="checkbox-content"
        onClick={handleChange} // Call handleChange when the checkbox is clicked
        onKeyUp={onKeyUp}
      >
        <input
          tabIndex="-1"
          type="checkbox"
          checked={checked} // Ensure that the checked prop is always defined
          onChange={handleChange} // Call handleChange for onChange event
        />
        <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
      </div>
      <button type="button" className="checkbox-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
};
