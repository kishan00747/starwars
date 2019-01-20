import React from 'react';
import './Card.css';

const Card = (props) => {

	return (

		<article className="card dib grow br2 pa3 ma2 shadow-5 bw2">
			{props.children}

		</article>

	);


}

export default Card;