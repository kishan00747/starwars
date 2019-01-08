import React from 'react';
import Person from './Person';
import Planet from './Planet';
import Card from './Card';
import Button from './Button';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";



class PopulateList extends React.Component {

	constructor(props)
	{
		super();
		this.state = {
			dataSet: []
		}
	}

	showPlaceholder = false;

	fetchData = () => {

		if(this.props.category !== 'default')
		{
			fetch('https://swapi.co/api/' + this.props.category)
					  	 .then(response => response.json())
					  	 .then(data => {
					  	 	this.showPlaceholder = false;
					  	 	this.setState({dataSet: data.results});
					  	 	});

		}

	}


	componentDidMount()
	{
  		this.fetchData();		
  	}

  	componentDidUpdate(prevProps)
  	{
  		if(prevProps.category !== this.props.category)
  		{
  			this.fetchData();
  		}
  	}

  	shouldComponentUpdate(nextProps, nextState)
  	{
  		if(this.props.category !== nextProps.category)
  		{
  			this.showPlaceholder = true;
  			return true;
  		}

  		if(this.state.dataSet !== nextState.dataSet)
  		{
  			return true;
  		}

  		return false;

  	}


	render()
	{
		if(this.props.category === 'default')
		{
			return (

				<div className="tc mt6">
					<h1 className="lh-title f1 measure white ttu"> May the Force be with You! </h1>
				</div>

			);
		}
		else
		{
			const {dataSet} = this.state;

			if(this.showPlaceholder)
			{
				return (
					<div>
					    <Card>
					    	<ReactPlaceholder showLoadingAnimation type='text' rows={4} ready={false}>				  
					     		<p>This is a test</p>
					    	</ReactPlaceholder>
				    	</Card>
				    </div>
				);
			}
			else
			{

				let populatedArray = [];
				
					switch(this.props.category)
					{
						case 'people':
						{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data}/>
							});

					  		break;
					  	}

					  	case 'planets':
					  	{
					        populatedArray = dataSet.map( (data,i) => {

								return <Planet key={i} data={data}/>
							});
							
					  		break;
					  	}

					  	case 'films':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data}/>
							});
					  		break;
					  	}

					  	case 'species':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data}/>
							});
					  		break;
					  	}

					  	case 'vehicles':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data}/>
							});
					  		break;
					  	}

					  	case 'starships':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data}/>
							});
					  		break;
					  	}

					  	default:
					  	{
					  		break;
					  	}
				}

				return (
					<div>
						<div className='flex items-start flex-wrap'>
							{populatedArray}
						</div>
						<Button label='Next' onButtonClick={this.onButtonClick}/>
					</div>
				);
			}	
		}

	}



}

export default PopulateList;