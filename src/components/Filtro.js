import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './styles/Filtro.css'

class Filtro extends React.Component {
  render() {
    return (
      <>
        <div className="filter-header">
          <FaIcons.FaUserFriends/>
          <p>Filtrar búsqueda</p>
        </div>
        <form className="filter-form">
          <label>Nombres
            <input type="text" id="name"/>
          </label>
          <label>Apellidos</label>
          <input type="text" id="lastname"/>
          <label>Identificación (C.C)</label>
          <input type="text" id="id"/>
          <label>Rol asociado</label>
          <input type="text" id="role"/>
          <label>Estado</label>
          <input type="text" id="state"/>
          <label>Contraseña</label>
          <input type="password" id="password"/>
          <label>Teléfono</label>
          <input type="text" id="tel"/>
          <label>Correo electrónico</label>
          <input type="email" id="email"/>
          <div className="buttonbox">
          <button className="filter-button">Filtrar</button>
          <button className="clean-button">Limpiar</button>
          </div>
        </form>
      </>
    )
  }
}

export default Filtro;