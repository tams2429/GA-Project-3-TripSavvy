import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  //state for turning navbar items on or off
  state = { navbarOpen: false }
  
  //minimise navbar items for responsive
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {

    return (
      <nav className="navbar">     
        <div className="navbar-brand">


          <Link className="navbar-item" to=""><h1>FIND ME A CITY</h1></Link>
          <Link className="navbar-item" to=""><h1>SEARCH</h1></Link>
          <Link className="navbar-item" to="/cities/:id"><h1>Cities</h1></Link>

          <span className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </span>  
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end nav-dropdown">
            <Link className="navbar-item" to=""><h1>REGISTER</h1></Link>
            <Link className="navbar-item" to=""><h1>LOGIN</h1></Link>
            <Link className="navbar-item" to="/profile"><h1>PROFILE</h1></Link>
          </div>
        </div>

      </nav>
    )

  }


}



export default withRouter(NavBar)