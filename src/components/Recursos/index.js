//Dependencias
import React, { Component } from 'react';

//Componentes
import Title from '../Global/Title';
import Busqueda from '../Global//Busqueda.js';
import Contenido from './Contenido.js';
import data from './data.js';

class Recursos extends Component {
	render(){
		return(
			<div>
				<Title title='Docentes'/>
				<Busqueda />
				<Contenido listado={data}/>
			</div>
		);
	}
}

export default Recursos;