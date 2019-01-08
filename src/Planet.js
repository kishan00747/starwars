import React from 'react';
import Card from './Card';
import ReactPlaceholder from 'react-placeholder';


class Planet extends React.Component{


	render()
	{
			const {name, diameter, climate, gravity} = this.props.data;
			return (

				<Card>
					<ReactPlaceholder showLoadingAnimation type='text' rows={4} ready={this.props.ready}>				  
					    	
						<h2 className='f3 pv2'>{name}</h2>
						<p className='f5 pv1'>Diameter: {diameter}</p>
						<p className='f5 pv1'>Climate: {climate}</p>
						<p className='f5 pv1'>Gravity: {gravity}</p>


					</ReactPlaceholder>
				</Card>


		);

	}
	
}

export default Planet;
