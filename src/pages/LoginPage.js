import React from 'react';
import Login from '../components/Login';
import './styles/LoginPage.css'

class LoginPage extends React.Component {

  state = {
    form: {
      username: '',
      password: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, // clonamos el objeto del state
        [e.target.name] : e.target.value, // le añadimos el nuevo valor que se agrega a state
      },
    })
  }


  render() {
    return (
      <>
        <div className="main">
            <p>Aplicación <br/> OLSoftware</p>
            <span>Prueba práctica Fron-tend senior</span>
          <Login onChange = {this.handleChange} formValues = {this.state.form}/>
        </div>
      </>
    )
  }
}

export default LoginPage;