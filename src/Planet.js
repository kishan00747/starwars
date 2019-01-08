import React from 'react';
import Card from './Card';

const Planet = ({data}) => {

	

	if(data == null)
	{
		return (
			<Card>
				<h2> Planet Loading... </h2>
			</Card>
		);
	}	
	else
	{
			const {name, diameter, climate, gravity} = data;
			return (

			

				<Card>
					<h2 className='f3 pv2'>{name}</h2>
					<p className='f5 pv1'>Diameter: {diameter}</p>
					<p className='f5 pv1'>Climate: {climate}</p>
					<p className='f5 pv1'>Gravity: {gravity}</p>

				</Card>


		);

	}
	
}

export default Planet;