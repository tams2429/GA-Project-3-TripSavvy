import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  render() {

    return (
      <nav className="navnar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to=""><h1>FIND ME A CITY</h1></Link>
          <Link className="navbar-item" to=""><h1>SEARCH</h1></Link>
          <Link className="navbar-item" to=""><h1>REGISTER</h1></Link>
          <Link className="navbar-item" to=""><h1>LOGIN</h1></Link>
          <Link className="navbar-item" to=""><h1>PROFILE</h1></Link>
        </div>

      </nav>
    )

  }


}



export default withRouter(NavBar)