
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Inicio from './components/Inicio';
import Materias from './components/Materias';
import Docentes from './components/Docentes';
import Recursos from './components/Recursos';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Page404 from './components/Page404';


const AppRoutes = () =>
  <App>
    <Switch>
   	  <Route exact path="/" component={Inicio} /> 
      <Route exact path="/materias" component={Materias}/>
      <Route exact path="/docentes" component={Docentes}/>
      <Route exact path="/recursos" component={Recursos}/>
      <Route exact path="/contacto" component={Contacto}/>
      <Route exact path="/login" component={Login}/>
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
