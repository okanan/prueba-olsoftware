import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import './styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

class Login extends React.Component {
  
  handleClick = (e) => {

    const user = 'oerazo';
    const password = 'olsoftware';

    if(this.props.formValues.username === user && this.props.formValues.password === password ){
      return(
        window.location.href = "/admin"
      );
    }else{
      alert('Tu nombre de usuario y/o contraseña son incorrectos')
      return(
        <Link to="#"></Link>

      )
    }
    
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form was submit');
    console.log(this.state);
  };

  render() {
    return (
      <>
      <BrowserRouter>
      <div className="container">
        Inicio de sesión
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="inputs">
            <div className="user-input">
              <input type="text" onChange={this.props.onChange} name="username" placeholder="Usuario" value={this.props.formValues.username}/><FontAwesomeIcon icon={faUser} />
            </div>
            <div className="psw-input">
              <input type="password" onChange={this.props.onChange} name="password" placeholder="Contraseña" value={this.props.formValues.password}/><FontAwesomeIcon icon={faLock} />
            </div>
          </div>
            <button type="submit" onClick={this.handleClick}> Iniciar sesión</button>
        </form>
      </div>
      </BrowserRouter>
      
      </>
    )
  }
}

export default Login;