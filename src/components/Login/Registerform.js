import React, { Component } from 'react';
import { enviarDatos } from './enviarDatos';

class Registerform extends Component {
constructor() {
    super();
    this.state = { email: "", password: "", name: "u", registrado: 0, nameErr:"", emailErr:"", passErr:""};
    //hay problema al dejar al dejar name vacio?
    //hay problema si la contrasella es vacio en lugar de null?
    this.validar = this.validar.bind(this);

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

  validar(e){
    //console.log(this.state);
    if ((this.state.name.length <3 && this.state.name.length!==0)|| ((this.state.name === "u")&&(e.target.id ==='name'))){
            this.setState({nameErr: 'No es nombre valido'});
        }
    if(this.state.name.length >=3){
            this.setState({nameErr: ''});
        }
    if((this.state.email.indexOf('@') === -1 && this.state.email.length !==0) || ((this.state.email=== "")&&(e.target.id ==='email1'))){
            this.setState({emailErr: 'No es una direccion de correo'});
        }

    if(this.state.email.indexOf('@') > -1){
            this.setState({emailErr: ''});
        }
    if ((this.state.password.length <2 && this.state.password.length!==0)|| ((this.state.password === "")&&(e.target.id ==='password1'))){
            this.setState({passErr: 'No es una contraseña valida'});
          }
    if(this.state.password.length >=2){
            this.setState({passErr: ''});
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
              <label htmlFor="name">Nombre &nbsp; <font color = 'red'>{this.state.nameErr}</font></label>
              <input type="text" onChange={(e)=>this.setField(e)} onBlur={(e)=>this.validar(e)} className="form-control" id="name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email &nbsp; <font color = 'red'>{this.state.emailErr}</font></label>
              <input type="text" onChange={(e)=>this.setField(e)} onBlur={(e)=>this.validar(e)} className="form-control" id="email1" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña &nbsp; <font color = 'red'>{this.state.passErr}</font></label>
              <input type="password" onChange={(e)=>this.setField(e)} onBlur={(e)=>this.validar(e)} className="form-control" id="password1" />
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
