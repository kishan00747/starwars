import React from 'react';
import Card from './Card';
import ReactPlaceholder from 'react-placeholder';


class Film extends React.Component{


	render()
	{
			const {title, episode_id, release_date, director, producer} = this.props.data;
			return (

				<Card>
					<ReactPlaceholder showLoadingAnimation type='text' rows={5} ready={this.props.ready}>				  
					    	
						<h2 className='f3 pv2'>{title}</h2>
						<p className='f5 pv1'>Episode: {episode_id}</p>
						<p className='f5 pv1'>Release Date: {release_date}</p>
						<p className='f5 pv1'>Director: {director}</p>
						<p className='f5 pv1'>Producer: {producer}</p>



					</ReactPlaceholder>
				</Card>


		);

	}
	
}

export default Film;
