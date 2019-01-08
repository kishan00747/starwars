import React from 'react';
import Person from './Person';
import Planet from './Planet';
import Card from './Card';
import Button from './Button';




class PopulateList extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			dataSet: [],
			urlNext: '',
			urlPrev: '',
			ready: false
		}
	}

	onButtonClick = (event) => {

		if(event.target.id === 'btnNext' && this.state.urlNext != null)
		{
			const url = this.state.urlNext.replace('https://swapi.co/api/','')
			this.setState({ready: false});
			this.fetchData(url);
		}

		if(event.target.id === 'btnPrev' && this.state.urlPrev != null)
		{
			const url = this.state.urlPrev.replace('https://swapi.co/api/','')
			this.setState({ready: false});
			this.fetchData(url);
		}
		

	}


	fetchData = (url) => {

		if(url !== 'default')
		{
			fetch('https://swapi.co/api/' + url)
					  	 .then(response => response.json())
					  	 .then(data => {
					  	 	
					  	 	this.setState({dataSet: data.results, urlNext:data.next, urlPrev:data.previous, ready: true});
					  	 	});

		}

	}


	componentDidMount()
	{
  		this.fetchData(this.props.category);		
  	}

  	componentDidUpdate(prevProps)
  	{
  		if(prevProps.category !== this.props.category)
  		{
  			this.fetchData(this.props.category);
  		}
  	}

  	shouldComponentUpdate(nextProps, nextState)
  	{
  		if(this.props.category !== nextProps.category)
  		{
  			this.setState({ready: false});
  			return true;
  		}

  		if(this.state.dataSet !== nextState.dataSet)
  		{
  			return true;
  		}

  		if(this.state.ready !== nextState.ready)
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

			if(!dataSet.length)
			{
				return (
					<div>
					    <Card>
					    				  
					     		<h2>Data Loading...</h2>
					    	
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

								return <Person key={i} data={data} ready={this.state.ready}/>
							});

					  		break;
					  	}

					  	case 'planets':
					  	{
					        populatedArray = dataSet.map( (data,i) => {

								return <Planet key={i} data={data} ready={this.state.ready}/>
							});
							
					  		break;
					  	}

					  	case 'films':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data} ready={this.state.ready}/>
							});
					  		break;
					  	}

					  	case 'species':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data} ready={this.state.ready}/>
							});
					  		break;
					  	}

					  	case 'vehicles':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data} ready={this.state.ready}/>
							});
					  		break;
					  	}

					  	case 'starships':
					  	{
							populatedArray = dataSet.map( (data,i) => {

								return <Person key={i} data={data} ready={this.state.ready}/>
							});
					  		break;
					  	}

					  	default:
					  	{
					  		break;
					  	}
				}

				let buttons = [];

				if(this.state.urlPrev !== null)
				{
					buttons.push(<Button key={1} id='btnPrev' label='Prev' onButtonClick={this.onButtonClick}/>);
				}


				if(this.state.urlNext !== null)
				{
					buttons.push(<Button key={0} id='btnNext' label='Next' onButtonClick={this.onButtonClick}/>);
				}

				
				return (
					<div>
						<div className='flex items-start flex-wrap'>
							{populatedArray}
						</div>
						{buttons}
					</div>
				);
			}	
		}

	}



}

export default PopulateList;