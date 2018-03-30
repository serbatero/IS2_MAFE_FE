// Dependencias
import React, { Component } from 'react';

//Componentes
import Title from '../Global/Title';
import Busqueda from '../Global//Busqueda.js';
import Contenido from './Contenido.js';
import data from './data.js';

class Materias extends Component {
	render(){
		return(
			<div>
				<Title title="Materias"/>
				<Busqueda />
				<Contenido listado={data}/>
			</div>
		);
	}
}

export default Materias;