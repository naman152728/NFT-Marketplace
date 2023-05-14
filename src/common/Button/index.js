/* eslint-disable no-unused-vars */
import React from 'react';
import "./button.css";

const Button = (props) => {
    const { btnType, btnText, btnOnClick, customClass } = props;

    return ( 
        <div
        className={` ${
        btnType === "PRIMARY"
            ? `button primary-btn ${customClass}` 
            : `button secondary-btn ${customClass}`
        }`}            
        // eslint-disable-next-line no-undef
        onClick={btnOnClick}
        >
            {btnText}
        </div>
  );
};

export default Button;

