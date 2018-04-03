import React, { Component } from 'react';
import { enviarDatos } from './enviarDatos';

class Registerform extends Component {
constructor() {
    super();
    this.state = { email: null, password: null, name: "usuario", registrado: 0 };
  }

 setField (e) {
 	if(e.target.id === 'email1'){
    this.setState({
      email: e.target.value
    })
    }
    if(e.target.id === 'password1'){
    this.setState({
      password: e.target.value
    })
    }
    if(e.target.id === 'name'){
    this.setState({
      name: e.target.value
    })
    }
  }

  handleSubmit = (e) =>{
    const loginParams = {
    "username": this.state.name,
    "email": this.state.email,
    "password": this.state.password, 
    "password_confirmation":  this.state.password,
    "avatar": "https://robohash.org/quasiquianihil.png?size=300x300&set=set1"
    }
    enviarDatos(loginParams).then((token) => {
      //localStorage.setItem("jwtToken", token.jwt)
    }).then(  this.setState({registrado: 1}) ).catch((error) => {
     // this.setState({error: "Email o contraseña incorrecta"})
    });

  }
  render() {
    if(this.state.registrado === 1){

      return(<div>
        <div className="col-md-6">
       <div className="box-for overflow">
        <div className="col-md-12 col-xs-12 register-blocks">
        <br></br>
          <h2>Registrado exitosamente! </h2> 
        <br></br>
        <br></br>
          <h2>Bienvenido {this.state.name} </h2> 
        <br></br>
          </div>
      </div>
    </div>
      </div>)

    }else
     return(
          <div className="col-md-6">
       <div className="box-for overflow">
        <div className="col-md-12 col-xs-12 register-blocks">
          <h2>Registrate : </h2> 
          <form >
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" onChange={(e)=>this.setField(e)} className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" onChange={(e)=>this.setField(e)} className="form-control" id="email1" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" onChange={(e)=>this.setField(e)} className="form-control" id="password1" />
            </div>
            <div className="text-center">
              <button type="submit" onClick={this.handleSubmit} className="btn btn-default">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      )
    }
  
}

export default Registerform;
