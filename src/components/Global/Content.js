import React from "react";
import { Switch, Route } from "react-router-dom";

import Inicio from '../Inicio';
import Materias from '../Materias';
import Docentes from '../Docentes';
import Recursos from '../Recursos';
import Contacto from '../Contacto';
import Login from '../Login';
import Register from '../Login/Registerform';
import Page404 from '../Page404';

const Content = () => (
  <content>
    <Switch>
      <Route exact path="/" component={Inicio} /> 
      <Route  path="/materias" component={Materias}/>
      <Route  path="/docentes" component={Docentes}/>
      <Route  path="/recursos" component={Recursos}/>
      <Route exact path="/contacto" component={Contacto}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route component={Page404} />
    </Switch>
  </content>
);
export default Content;