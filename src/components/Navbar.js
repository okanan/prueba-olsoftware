import React, {useState} from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {SidebarData} from './sidebar-data';
import  './styles/Navbar.css';
import {IconContext} from 'react-icons';
// import Header from './Header'

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    
  return (
    <>
    <IconContext.Provider value={{color: 'white'}}>
      <div className="navbar">
        <div className="navbar-title">
          <Link to ="#"className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
          <h4>Prueba Front-end </h4>
        </div>
        <div className="navbar-log">
          <FaIcons.FaUser></FaIcons.FaUser>
          <p>Oscar Erazo</p>
          <Link to="/login">
            <FaIcons.FaSignOutAlt/>
          </Link>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <span>OLSoftware</span>
              <AiIcons.AiFillHome/>
            </Link>
            <br/>
          </li>
            <hr/>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                  {item.icon}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )

}

export default Navbar;