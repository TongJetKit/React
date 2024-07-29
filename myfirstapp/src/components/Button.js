import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function Button({children, type, onClick, buttonStyle, buttonSize}) {

    const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonStyle: SIZES[0];

  return (
    <Link to="/sign-in" className='btn--mobile'>
        <button className={`btn ${checkButtonSize} ${checkButtonStyles}`} onClick={onClick} type={type}>
            {children}
        </button>
    </Link>
  )
}

export default Button