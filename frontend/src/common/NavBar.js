import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from './../lib/auth'

class NavBar extends React.Component {

  state = { navbarOpen: false }
  
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  handleLogout = () => {
    logout()
  }

  render() {
    const isLoggedIn = isAuthenticated()
    return (
      <nav className="navbar">     
        <div className="navbar-brand">
          <Link className="navbar-item logo nav-item hvr-shrink" to="">TRIPSAVVY</Link>
          <Link className="navbar-item nav-link hvr-shrink" to="/home"><h1>FIND ME A CITY</h1></Link>
          { isLoggedIn ?
            <Link className="navbar-item nav-link hvr-shrink" to="/createcity">CREATE A CITY</Link>
            :
            <>
            </>
          }
          <span className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </span>  
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end nav-dropdown">
            {isLoggedIn ?
              <> 
                <Link className="navbar-item"   to="/profile"><h1>PROFILE</ h1></Link>
                <Link className="navbar-item"   to="/login" onClick={this.handleLogout} >LOGOUT</Link>
              </>
              :
              <>
                <Link className="navbar-item"   to="/login">LOGIN
                </  Link>
                <Link className="navbar-item"   to="/register">REGISTER
                </Link>
              </>
            }
          </div>
        </div>
      </nav>
    )
  }
}



export default withRouter(NavBar)