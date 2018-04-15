// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
// Data
import items from '../data/menu';
import store from '../store';
import { obtenerDatos, pPost } from './Login/obtenerDatos';

class App extends Component {

constructor() {
    super()
    this.state = {  s_users: []}
    
  }
 
  componentWillMount(){
     if (localStorage.getItem('jwtToken')) {
      obtenerDatos(localStorage.getItem('jwtToken')).then((users) => {
        this.setState({ s_users: users })
      })
    }
    if (localStorage.getItem('googleToken')) {
      const loginParams = {"token": localStorage.getItem('googleToken')}
      pPost(loginParams,'googles').then((users) => {
        
        this.setState({ s_users: users[0] })
      })
    }
  }

   static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {  
    console.log(this.state.s_users);
    if (localStorage.getItem('jwtToken')) {
    store.dispatch({
         type: "ADD_TO_STORE",
         id: this.state.s_users.id,
         username: this.state.s_users.username,
         email: this.state.s_users.email,
         avatar: this.state.s_users.avatar,
         career_id: this.state.s_users.career_id
     })}
    const { children } = this.props;
    return (
      <div >
        <Header items={items}/>
        <Content body={children} />
        <Footer items={items}/>
      </div>
    );
  }
}

export default App;
