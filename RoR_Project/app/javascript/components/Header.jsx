import React from "react";

import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (  
        <header id="header" className="header" style={{position: "inherit"}}>  
            <div className="container">            
                <h1 className="logo pull-left">
                    <a className="scrollto" href="/">
                        <span className="logo-title">yourAnalytics</span>
                    </a>
                </h1>           
                <nav id="main-nav" className="main-nav navbar-right" role="navigation">        
                    <div className="navbar-collapse collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
                            <li className="nav-item"><Link to="/docs" className="nav-link">Docs</Link></li>
                            <li className="nav-item"><Link to="/license" className="nav-link">License</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;