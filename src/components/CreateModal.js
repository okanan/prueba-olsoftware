import React from 'react';
import ReactDOM from 'react-dom';
import './styles/CreateModal.css';

function CreateModal (props){
  if(!props.isOpen){
    return null
  }
  return ReactDOM.createPortal(
      <div className="create-modal-container">
        <div className="create-modal-card">
          <div className="create-modal-header">
            <p>Agregar nuevo usuario</p>
            <button onClick={props.onClose}>X</button>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="create-modal-form">
              <div>
                <label>Nombres <br/>
                  <input type="text"/>
                </label>
                <label>Identificación <br/>
                  <input type="text"/>
                </label>
                <label>Estado <br/>
                  <input type="text"/>
                </label>
                <label>Teléfono <br/>
                  <input type="text"/>
                </label>
              </div>
              <div>
              <label>Apellidos <br/>
                  <input type="text"/><br/>
                </label>
                <label htmlFor="">Rol <br/>
                  <input type="text"/>
                </label>
                <label>Contraseña <br/>
                  <input type="text"/>
                </label>
                <label>Correo<br/>
                  <input type="text"/>
                </label>
              </div>
            </div>
            <div className="create-modal-buttons">
              <button type="submit" className="create-modal-button-accept">Aceptar</button>
              
              <button className="create-modal-button-cancel">Cancelar</button>
            </div>
          </form>
          {props.children}
        </div>
      </div>,
      document.getElementById('create-modal')
    )
}

export default CreateModal;