import React from 'react';
import './Card.css';

const Card = (props) => {

	return (

		<div className="card dib grow br2 pa3 ma2 shadow-5 bw2">
			{props.children}

		</div>

	);


}

export default Card;