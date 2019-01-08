import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Lightsaber from './Lightsaber';
import PopulateList from './PopulateList';


class App extends Component {


  constructor()
  {
  		super();
  		this.state = {
  			category: 'default'
  		}

  }


  changeCategory = (category) =>
  {
  		
		this.setState({category: category});			
  }

  render() {
    return (

      <div className=''>
        <h1 className='f1 tc ttu white'>Star Wars Universe</h1>
        <Navbar changeCategory={this.changeCategory}/>
        <div className='fl'>
        	<Lightsaber />
        </div>

        <div className='mr3'>
        	<PopulateList category={this.state.category}/>
        </div>

      </div>
    );
  }
}

export default App;
