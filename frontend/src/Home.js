import React from 'react'

import { getAllCities } from './lib/api'

class Home extends React.Component {

  state = {
    hasNightLife: false,
    hasFoodScene: false,
    hasCulture: false,
    hasBeach: false,
    hasSnow: false,
    hasNature: false,
    allCities: [],
    selectedCity: []
  }

  // handleClick = () => {

  // }

  handleSelected = (event) => {
    console.log(event.target.id)
    if (event.target.id === 'night') {
      const currentState = this.state.hasNightLife
      this.setState( { hasNightLife: !currentState } )
    } else if (event.target.id === 'food') {
      const currentState = this.state.hasFoodScene
      this.setState( { hasFoodScene: !currentState } )
    } else if (event.target.id === 'culture') {
      const currentState = this.state.hasCulture
      this.setState( { hasCulture: !currentState } )
    } else if (event.target.id === 'beach') {
      const currentState = this.state.hasBeach
      this.setState( { hasBeach: !currentState } )
    } else if (event.target.id === 'snow') {
      const currentState = this.state.hasSnow
      this.setState( { hasSnow: !currentState } )
    } else if (event.target.id === 'nature') {
      const currentState = this.state.hasNature
      this.setState( { hasNature: !currentState } )
    }
  }

  handleClick = async () => {
    try {
      const allCities = await getAllCities()
      // console.log(allCities)
      this.setState( { allCities: allCities.data } )

      //* Use array.filter to return array of cities that match categories
      //! How to use filter to select cities which contain more than one selected category?
      const allCitiesArray = allCities.data
      const selectedCities = allCitiesArray.filter(city => {
        if (city.hasNightLife === this.state.hasNightLife && this.state.hasNightLife) {
          return city
        }
        if (city.hasFoodScene === this.state.hasFoodScene && this.state.hasFoodScene) {
          return city
        }
        if (city.hasCulture === this.state.hasCulture && this.state.hasCulture) {
          return city
        }
        if (city.hasBeach === this.state.hasBeach && this.state.hasBeach) {
          return city
        }
        if (city.hasSnow === this.state.hasSnow && this.state.hasSnow) {
          return city
        }
        if (city.hasNature === this.state.hasNature && this.state.hasNature) {
          return city
        }
      })

      //* Choose random city from cities that match selected categories
      // console.log(selectedCities[Math.floor(Math.random() * selectedCities.length)])
      const selectedCity = selectedCities[Math.floor(Math.random() * selectedCities.length)]
      this.setState( { selectedCity } )
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container ">
          <div className="columns home-row1">
            <div className={this.state.hasNightLife ? 'column night isSelected' : 'column night'} onClick={this.handleSelected} id="night">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">NightLife</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasFoodScene ? 'column food isSelected' : 'column food'} onClick={this.handleSelected} id="food">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">Food</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasCulture ? 'column culture isSelected' : 'column culture'} onClick={this.handleSelected} id="culture">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">Culture</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="columns home-row2">
            <div className={this.state.hasBeach ? 'column beach isSelected' : 'column beach'} onClick={this.handleSelected} id="beach">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">Beach</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasSnow ? 'column snow isSelected' : 'column snow'} onClick={this.handleSelected} id="snow">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">Snow</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasNature ? 'column nature isSelected' : 'column nature'} onClick={this.handleSelected} id="nature">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle">Nature</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="columns home-row3">
            <button className="button is-danger is-rounded" onClick={this.handleClick}>Take me to a trip</button>
          </div>
        </div>
        
      </section>
    )
  }
}

export default Home
