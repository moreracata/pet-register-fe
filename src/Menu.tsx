import { NavLink } from "react-router-dom";

export default function Menu(){
  const activeStyle = { color: "#000000" };
    return (
        <div>
        <nav className="navbar navbar-expand-md fixed-top custom-rose">
          <NavLink className="navbar-brand" to="/">PET SHOP</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
             
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                  PETS
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/pets">OPTIONS</NavLink>
                  <NavLink className="dropdown-item" to="/PetList">REGISTER</NavLink>
                  <NavLink className="dropdown-item" to="#">OPTION</NavLink>
                  <NavLink className="dropdown-item" to="#">SEARCH</NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/pets" id="navbardrop" data-toggle="dropdown">
                  SERVICES
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="#">VETERINAR</NavLink>
                  <NavLink className="dropdown-item" to="#">GROMMING</NavLink>
                  <NavLink className="dropdown-item" to="#">SEARCH</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">STORE</a>
              </li>    
            </ul>
          </div>  
        </nav>
       
        </div>
    )
}