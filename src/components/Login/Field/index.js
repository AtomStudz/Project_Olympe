// == Import : npm
import React from 'react';

// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Component
const Field = ({
  value,
  type,
  name,
  placeholder,
  manageChange,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;
  return (
    <div className="field">
      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        required
      />
    </div>
  );
};

// == Proptypes validation
Field.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// == Default values
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
