import React from "react";

import { Route, Link, browserHistory } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from "../components/Routes.jsx"

function RouteWithSubRoutes(route) {
    return (
        <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} updateWindow={Header.updateWindow} />
        )}
        />
    );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { window: this.getPromo() }
  }

  updateWindow = (value) => {
      this.setState({ window: value })
  }

  getPromo() {
      return(
        <section id="promo" className="promo section offset-header">
            <div className="container text-center">
                <h2 className="title">your<span className="highlight">Analytics</span></h2>
                <p className="intro">Анализируем ваш Youtube-канал</p>
                <div className="btns">
                    <a className="btn btn-cta-secondary" href="http://themes.3rdwavemedia.com/" target="_blank">Demo</a>
                    <a className="btn btn-cta-primary" href="http://themes.3rdwavemedia.com/website-templates/devaid-free-bootstrap-theme-developers/" target="_blank">Download</a>
                </div>
                <ul className="meta list-inline">
                    <li><a href="https://github.com/Yauheni33/RoR" target="_blank">View on GitHub</a></li>
                    <li>Created by: <a href="https://www.linkedin.com/in/yauheni-busko-aa679b151/" target="_blank">Yauheni Busko</a></li>
                </ul>
            </div>
            <div className="social-media" style={{marginTop: "5px"}}>
            </div>
        </section>
      )
  }

  render () {
    var promo = this.state.window
    return (
        <Router history={history}>  
            <header id="header" className="header" style={{position: "inherit"}}>  
                <div className="container">            
                    <h1 className="logo pull-left">
                        <a className="scrollto" href="#promo">
                            <span className="logo-title">yourAnalytics</span>
                        </a>
                    </h1>           
                    <nav id="main-nav" className="main-nav navbar-right" role="navigation">
                        <div className="navbar-header">
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>         
                        <div className="navbar-collapse collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
                                <li className="nav-item"><Link to="/docs" className="nav-link">Docs</Link></li>
                                <li className="nav-item"><Link to="/license" className="nav-link">License</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link" innerRef={node => {}}>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
            </div>
            {promo}
        </Router>
    );
  }
}

export default Header;