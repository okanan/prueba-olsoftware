import React from 'react';
import * as FaIcons from 'react-icons/fa'
import {UsersData} from '../components/UsersData';
import './styles/board.css';
import CreateModal from './CreateModal'

function Board(props){
  
  return(
    <div className="board-container">
      <div className="board-header">
        <p>Usuarios existentes</p>
        <button onClick={props.onOpenModal}>Crear</button>
        <CreateModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} />
      </div>
      <div className="board-table">
        <table>
          <thead>
            <tr>
            <th> Nombre </th>
              <th> Apellido </th>
              <th> Identificación  </th>
              <th> Rol </th>
              <th> Teléfono  </th>
              <th> Email </th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            
              {UsersData.map((item,index) => {
                return(
                  <tr key={index}>
                    <td> {item.FirstName} </td>
                    <td> {item.LastName} </td>
                    <td> {item.ID} </td>
                    <td> {item.Rol} </td>
                    <td> {item.Tel} </td>
                    <td> {item.email} </td>
                    <td>
                      <FaIcons.FaEdit></FaIcons.FaEdit>
                      <FaIcons.FaTrash></FaIcons.FaTrash>
                    </td>
                  </tr>
                );
              })}            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Board;