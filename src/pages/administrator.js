import React from 'react';
import Navbar from '../components/Navbar';
import './styles/administrator.css';
import Footer from '../components/Footer';
import Filtro from '../components/Filtro';
import Board from '../components/Board';

class administrator extends React.Component {

  state = {
    class: 'board',
    modalIsOpen: false,
    form: {
      FirstName: '',
      LastName: '',
      ID: '',
      Rol: '',
      Tel: '',
      email: '',
      cName: ''
    }

  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, // clonamos el objeto del state
        [e.target.name] : e.target.value, // le añadimos el nuevo valor que se agrega a state
      },
    })
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true})
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false})
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render(){
    return (
      <>
        <div className="board">
          <div className="nav">
            <Navbar />
          </div>
          <div className="dashboard">
            <Board
            onSendForm = {this.handleSubmit}
            onCloseModal={this.handleCloseModal}
            onOpenModal = {this.handleOpenModal}
            modalIsOpen = {this.state.modalIsOpen}
            />

            
          </div>
          <div className="filter">
            <Filtro onChange={this.handleChange} formValues = {this.state.form}/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </>
    )
  }
}

export default administrator;