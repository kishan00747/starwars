import React, {Component} from 'react';
import Button from "./Button";
import {capitalize} from 'lodash';
// import items from 'Navbar-items';


class Navbar extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			items: []
		}
	}

	onButtonClick = (event) =>
	{
	 		const category = event.target.innerHTML.toLowerCase();
			this.props.changeCategory(category);	 	
	}


	componentDidMount() 
	{
		fetch('https://swapi.co/api/')
		.then(response => response.json())
		.then((data) => {
			this.setState({items: Object.entries(data)});
		});

	}


	render(){

		const {items} = this.state;
		const ButtonList = items.map((item,i) => {
			return <Button key={i} label={capitalize(items[i][0])} onButtonClick={this.onButtonClick} />
		});


		return (

			<div className = 'flex flex-wrap justify-center'>
				{ButtonList}
			</div>


		);

	}
}

export default Navbar;