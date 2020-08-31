import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ErrorPage = () => (
  <>
    <Helmet>
      <style type="text/css">{`
      .navbar {     
          display: none;  
      }`
      }</style>
    </Helmet>
    <section className="hero is-fullheight error-page">
      <div className="hero-body">
        <div className="container">
          <p>Oops, something went wrong</p>
          <div className="container">
            <Link className="error-link hvr-shrink"to="/"><h1>Take me Home</h1></Link>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ErrorPage