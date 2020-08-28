import React from 'react'

import { getAllCities } from './lib/api'
import { popupSuccess, popupError } from './lib/notification'


class Home extends React.Component {

  state = {
    categories: [],
    allCities: [],
    possibleCityOptions: [],
    selectedCity: true,
    night: false,
    food: false,
    culture: false,
    beach: false,
    snow: false,
    nature: false
  }

  async componentDidMount() {
    try {
      const allCities = await getAllCities()
      this.setState( { allCities: allCities.data } )
    } catch (err) {
      console.log(err)
    }
  }

  handleSelected = (event) => {
    if (!this.state.categories.includes(event.target.id)){
      const addedCategoryArray = [...this.state.categories, event.target.id]
      this.setState({ categories: addedCategoryArray })
    } else {
      const selectedCategories = [ ...this.state.categories]
      const removedCategoryArray = selectedCategories.filter( attribute => {
        return attribute !== event.target.id
      })
      this.setState({ categories: removedCategoryArray })
    }
  }

  handleClick = () => {
    try {
      const allCitiesArray = this.state.allCities
      const selectedCategories = this.state.categories
      const selectedCities = this.state.possibleCityOptions
      allCitiesArray.forEach( city => {
        const cityCategoryArray = city.categories
        if (selectedCategories.every(category => cityCategoryArray.includes(category))) {
          selectedCities.push(city)
        } 
      })
      this.setState({ possibleCityOptions: selectedCities })
      const chosenCity = selectedCities[Math.floor(Math.random() * selectedCities.length)]
      if (chosenCity) {
        popupSuccess('Your next dream holiday is being processed...')
        this.props.history.push(`/cities/${chosenCity._id}`)
      } else {
        popupError('Looks like someone is being too picky...')
        this.setState({ selectedCity: false })
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleReset = () => {
    this.setState({ categories: [], possibleCityOptions: [], selectedCity: true })
  }

  isSelected = (id) => {
    const selectedCategoryArray = this.state.categories
    if (selectedCategoryArray.some(category => {
      return category === id
    })) {
      return true
    }
  }

  mouseEnter = event => { 
    if (event.target.id === 'night') {
      this.setState({ night: true })
    } else if (event.target.id === 'food') {
      this.setState({ food: true })
    } else if (event.target.id === 'culture') {
      this.setState({ culture: true })
    } else if (event.target.id === 'beach') {
      this.setState({ beach: true }) 
    } else if (event.target.id === 'snow') {
      this.setState({ snow: true }) 
    } else if (event.target.id === 'nature') {
      this.setState({ nature: true })
    }
  }

  mouseLeave = event => {
    if (event.target.id === 'night') {
      this.setState({ night: false })
    } else if (event.target.id === 'food') {
      this.setState({ food: false })
    } else if (event.target.id === 'culture') {
      this.setState({ culture: false })
    } else if (event.target.id === 'beach') {
      this.setState({ beach: false }) 
    } else if (event.target.id === 'snow') {
      this.setState({ snow: false }) 
    } else if (event.target.id === 'nature') {
      this.setState({ nature: false })
    }
  }

  render() {
    return (
      <section className="section home">
        <div className="container">
          <div className="columns home-row1">
            <div className={this.isSelected('night') ? 'selected column night addMargin' : 'column night addMargin'} onClick={this.handleSelected} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="night">
              <section className="hero">
                <div className="hero-body">
                  <div className="container ">
                    <h2 className={this.state.night ? 'subtitle skew-pre skew-post' : 'subtitle skew-pre'} id="night">NightLife</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('food') ? 'selected column food addMargin' : 'column food addMargin'} onClick={this.handleSelected} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="food">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className={this.state.food ? 'subtitle skew-pre skew-post' : 'subtitle skew-pre'} id="food">Food</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('culture') ? 'selected column culture addMargin' : 'column culture addMargin'} onClick={this.handleSelected} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="culture">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className={this.state.culture ? 'subtitle skew-pre skew-post' : 'subtitle skew-pre'} id="culture">Culture</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="columns home-row2">
            <div className={this.isSelected('beach') ? 'selected column beach addMargin' : 'column beach addMargin'} onClick={this.handleSelected} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="beach">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className={this.state.beach ? 'subtitle skew-pre skew-post' : 'subtitle skew-pre'} id="beach">Beach</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('snow') ? 'selected column snow addMargin' : 'column snow addMargin'} onClick={this.handleSelected} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="snow">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className={this.state.snow ? 'subtitle skew-pre skew-post' : 'subtitle skew-pre'} id="snow">Snow</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('nature') ? 'selected column nature addMargin' : 'column nature addMargin'} onClick={this.handleSelected} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="nature">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className={this.state.nature ? 'subtitle skew-pre skew-post' : 'subtitle skew-pre'} id="nature">Nature</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {
            this.state.selectedCity ?
              <>
                <div className="columns home-row3 is-centered">
                  <button className="button trip-button is-rounded addMargin hvr-shrink" onClick={this.handleClick}>FIND A TRIP</button>
                </div>
              </>
              :
              <>
                <div className="columns home-row3 is-centered addMargin">
                  <p className="title none-found">Whoops! No city found with these specifications</p>
                </div>
                <div className="columns home-row4 is-centered addMargin">
                  <button className="button is-rounded trip-button" onClick={this.handleReset}>Try again</button>
                </div>
              </>
          }
        </div>
      </section>
    )
  }
}

export default Home
