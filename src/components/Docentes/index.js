// Dependencias
import React, { Component } from 'react';

//Componentes
import Title from '../Global/Title';
import Busqueda from '../Global/Busqueda.js';
import Contenido from './Contenido.js';
import Listado from './Listado.js';
import Individual from './Individual.js';
import baseURL from '../../url'
import { Switch, Route } from "react-router-dom";

const Index = ({ match }) => (

    <Switch>
        <Route exact path={`${match.url}`} component={Listado} />
        <Route path={`${match.url}/:id`} component={Individual} />
    </Switch>
);

export default Index;