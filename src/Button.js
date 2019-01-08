import React from 'react';
import  './Button.css';

const Button = (props) => {

	const { id, label, onButtonClick } = props;
	return (

		<button id={id} className='f4 grow no-underline br-pill ph5 pv2 mb2 dib hover-bg-yellow w-15 tc black bg-white mr2' onClick={onButtonClick}>{label}</button>

	);


}

export default Button;