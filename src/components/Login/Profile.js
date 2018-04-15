import React, { Component } from 'react';
import store from '../../store';

class Profile extends Component {
  constructor() {
    super();
    this.handleFinish.bind(this);
  }

handleFinish(e){
     localStorage.removeItem('jwtToken')
     window.location.reload()
  }

  render() {
     return(
    <div>
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
                  <div className="col-sm-3 padding-profile">
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
      )
    }
  
}

export default Profile;