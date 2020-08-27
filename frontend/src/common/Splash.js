import React from 'react'
import { Helmet } from 'react-helmet'





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
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Fullheight title
              </h1>
              <h2 className="subtitle">
                Fullheight subtitle
              </h2>
            </div>
          </div>
        </section> 
      </> 
    )
  }

}




export default Splash