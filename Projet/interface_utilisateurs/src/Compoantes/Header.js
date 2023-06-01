import React from "react";
import { Link } from "react-router-dom";

import "../Stayle/header.css"
function Header() {
  
    return (
      <>
        <header className="fs-4" >
            
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
            <a class="navbar-brand" href="#">
                 <strong><em><u style={{fontSize:"50px",marginLeft:"20px",fontFamily:"-moz-initial"}}>EST</u></em></strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mx-5 ">
                    <li className="nav-item pe-3 mx-3 li-my-hover active ">
                      <Link className="nav-link text-white" style={{fontSize:"20px"}} to="/">Le Programme </Link>
                    </li>
                    
                    
                    <li className="nav-item pe-3 mx-3 li-my-hover">
                      <Link className="nav-link text-white " to="/methodologie" style={{fontSize:"20px"}}>Méthodologie</Link>
                    </li>
                    <li className="nav-item pe-3 mx-3 li-my-hover">
                        <Link className="nav-link text-white" to="/partenaires" style={{fontSize:"20px"}}>Partenaires</Link>
                    </li>
                    <li className="nav-item pe-3 mx-3 li-my-hover">
                      <Link className="nav-link text-white" to="/contact" style={{fontSize:"20px"}}>Contact</Link>
                    </li>
                    <li className="nav-item pe-3 mx-3 li-my-hover">
                        <Link className="nav-link text-white" to="/faq" style={{fontSize:"20px"}}>FAQ</Link>
                    </li>
                    
                  </ul>
              <form class="form-inline my-2 my-lg-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                </svg>
                <button class="btn  my-sm-0 text-white" type="submit">Français</button>
                <Link to="participez" class="btn btn-outline-light  btn-outline-dark my-2 my-sm-0 text-white" type="submit">Participer</Link>
              </form>
            </div>
        </nav>
        </header>
    </>
  )
}


export default Header