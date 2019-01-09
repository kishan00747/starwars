import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import Card from './Card';

class Starship extends React.Component{


	render()
	{
			const {name, model, manufacturer, cost_in_credits, passengers, starship_class} = this.props.data;
			return (

				<Card>
					<ReactPlaceholder showLoadingAnimation type='text' rows={3} ready={this.props.ready}>				  
					    	
						<h2 className='f3 pv2'>{name}</h2>
						<p className='f5 pv1'>Model: {model}</p>
						<p className='f5 pv1'>Starship Class: {starship_class}</p>
						<p className='f5 pv1'>Manufacturer: {manufacturer}</p>
						<p className='f5 pv1'>Cost in Credits: {cost_in_credits}</p>
						<p className='f5 pv1'>Passengers: {passengers}</p>

					</ReactPlaceholder>
				</Card>


		);

	}
	
}

export default Starship;