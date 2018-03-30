// Dependencies
import React, { Component } from 'react';
import Title from '../Global/Title';
import { loginUser } from './loginUser';
import { obtenerDatos } from './obtenerDatos';
import store from '../../store';

class Login extends Component {
constructor() {
    super();
    this.state = { email: null, password: null, s_users: [], error: ""};
    this.handleFinish.bind(this);
  }

  componentWillMount(){
     if (localStorage.getItem('jwtToken')) {
      obtenerDatos(localStorage.getItem('jwtToken')).then((users) => {
        this.setState({ s_users: users })
       // console.log(this.state.s_users)
      })
    }

  }

 setField (e) {
 	if(e.target.id === 'email'){
    this.setState({
      email: e.target.value
    })
    }
    if(e.target.id === 'password'){
    this.setState({
      password: e.target.value
    })
    }
  }

  handleFinish(e){
     localStorage.removeItem('jwtToken')
     window.location.reload()
  }

  handleSubmit = (e) =>{
     e.preventDefault()
      const loginParams = {"auth": {"email": this.state.email, "password": this.state.password}}
      loginUser(loginParams).then((token) => {
      localStorage.setItem("jwtToken", token.jwt)
    }).then( this.props.history.push('/login') ).catch((error) => {
      this.setState({error: "Email o contraseña incorrecta"})
    });

  }
  render() {
      if (localStorage.getItem('jwtToken')) {
        return<div>
        <div className="page-head"> 
            <div className="container">
                <div className="row">
                    <div className="page-head-content">
                        <h1 className="page-title">Bienvenido : <span className="orange strong">{store.getState().username}</span></h1>               
                    </div>
                </div>
            </div>
        </div>

<div className="content-area user-profiel" style={{backgroundColor: '#FCFCFC'}}>&nbsp;
        <div className="container">   
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 profiel-container">
     
                <div className="profiel-header">
                  <h3>
                    <b>BIENVENIDO A</b> TU PERFIL <br />
                  </h3>
                  <hr />
                </div>
                <div className="clear">
                  <div className="col-sm-3 col-sm-offset-1">
                    <div className="picture-container">
                      <div className="picture">
                        <img src={`${store.getState().avatar}`} alt ="" className="picture-src" id="wizardPicturePreview"/>
                        <input type="file" id="wizard-picture" />
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-sm-3 padding-top-25">
                    <div className="form-group">
                      <h4 className="s-property-title">Nombre de usuario:</h4>
                      <label>{store.getState().username}</label>
                    </div>
                    <div className="form-group">
                       <h4 className="s-property-title">Correo electronico:</h4>
                        <label>{store.getState().email}</label>
                    </div> 
                   <button type="submit" onClick={this.handleFinish} className="btn btn-default">Cerrar sesión</button>
                  </div>  
                </div>
                <br />
           
            </div>
          </div>
        </div>
      </div>

        </div>
    } else {
    return (
       	<div>
      	<Title title='Login'/>
        <div className="register-area" style={{backgroundColor: 'rgb(249, 249, 249)'}}>
        <div className="container">


          <div className="col-md-6">
          
          </div>

          <div className="col-md-6">
            <div className="box-for overflow">                         
              <div className="col-md-12 col-xs-12 login-blocks">
                <h2>Login : </h2> 
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={(e)=>this.setField(e)} className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e)=>this.setField(e)} className="form-control" id="password" />
                  </div>
                  <p style={{color: 'red'}}>{this.state.error}</p>
                  <div className="text-center">
                   
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-default"> Log in</button>
                   
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
     	</div>
    )
  }
  }
}

export default Login;
