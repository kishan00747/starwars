import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import Card from './Card';

class Specie extends React.Component{


	render()
	{
			const {name, classification, designation, average_height} = this.props.data;
			return (

				<Card>
					<ReactPlaceholder showLoadingAnimation type='text' rows={4} ready={this.props.ready}>				  
					    	
						<h2 className='f3 pv2'>{name}</h2>
						<p className='f5 pv1'>Classification: {classification}</p>
						<p className='f5 pv1'>Designation: {designation}</p>
						<p className='f5 pv1'>Average Height: {average_height}</p>

					</ReactPlaceholder>
				</Card>


		);

	}
	
}

export default Specie;