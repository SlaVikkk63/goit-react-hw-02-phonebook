import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ text, type, onBtnClick }) => {
  return (
    <button type={type} className={css.btn} onClick={onBtnClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;