import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import Card from './Card';

class Person extends React.Component{


	render()
	{
			const {name, height, mass} = this.props.data;
			return (

				<Card>
					<ReactPlaceholder showLoadingAnimation type='text' rows={3} ready={this.props.ready}>				  
					    	
						<h2 className='f3 pv2'>{name}</h2>
						<p className='f5 pv1'>Height: {height}</p>
						<p className='f5 pv1'>Mass: {mass}</p>

					</ReactPlaceholder>
				</Card>


		);

	}
	
}

export default Person;