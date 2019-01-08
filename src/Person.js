import React from 'react';
import Card from './Card';

const Person = ({data}) => {

	

	if(data == null)
	{
		return (
			<Card>
				<h2> Person Loading... </h2>
			</Card>
		);
	}	
	else
	{
			const {name, height, mass} = data;
			return (

			

				<Card>
					<h2 className='f3 pv2'>{name}</h2>
					<p className='f5 pv1'>Height: {height}</p>
					<p className='f5 pv1'>Mass: {mass}</p>
				</Card>


		);

	}
	
}

export default Person;