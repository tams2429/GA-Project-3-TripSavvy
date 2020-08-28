import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class Splash extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <style type="text/css">{`
        .navbar {     
            display: none;  
        }`
          }</style>
        </Helmet>
        <section className="hero is-fullheight splash-page">
          <div className="hero-body">
            <div className="container">
              <Link to='/Home'><h1 className="splash-text hvr-skew-forward">TRIPSAVVY</h1></Link>       
              <div>   
              </div> 
            </div>
          </div>
        </section> 
      </> 
    )
  }
}

export default Splash