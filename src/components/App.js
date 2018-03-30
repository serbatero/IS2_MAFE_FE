//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes
import Header from './Global/Header.js';
import Content from './Global/Content.js';
import Footer from './Global/Footer.js';
//Data
import items from '../data/menu';

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};

	render() {
		const { children } =this.props;
		return (
			<div>
				<Header items={items}/>
				<Content body={children} />
				<Footer items={items} />
			</div>
		);
	}
}

export default App;