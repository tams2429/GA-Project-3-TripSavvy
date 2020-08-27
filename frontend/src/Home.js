import React from 'react'

import { getAllCities } from './lib/api'

class Home extends React.Component {

  state = {
    categories: [],
    allCities: [],
    possibleCityOptions: [],
    selectedCity: true
  }

  async componentDidMount() {
    try {
      const allCities = await getAllCities()
      this.setState( { allCities: allCities.data } )
      console.log(this.state.allCities)
    } catch (err) {
      console.log(err)
    }
  }

  handleSelected = (event) => {
    console.log(event.target.id)
    console.log(this.state.categories)
    if (!this.state.categories.includes(event.target.id)){
      const addedCategoryArray = [...this.state.categories, event.target.id]
      console.log(addedCategoryArray)
      this.setState({ categories: addedCategoryArray })
    } else {
      const selectedCategories = [ ...this.state.categories]
      const removedCategoryArray = selectedCategories.filter( attribute => {
        return attribute !== event.target.id
      })
      console.log(removedCategoryArray)
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
      console.log(chosenCity)
      console.log(this.state)
      if (chosenCity) {
        this.props.history.push(`/cities/${chosenCity._id}`)
      } else {
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
    console.log('running')
    const selectedCategoryArray = this.state.categories
    if (selectedCategoryArray.some(category => {
      return category === id
    })) {
      return true
    }
  }


  render() {
    return (
      <section className="section home">
        <div className="container">
          <div className="columns home-row1">
            <div className={this.isSelected('night') ? 'selected column night addMargin' : 'column night addMargin'} onClick={this.handleSelected} id="night">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle hvr-skew-forward" id="night">NightLife</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('food') ? 'selected column food addMargin' : 'column food addMargin'} onClick={this.handleSelected} id="food">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle hvr-skew-forward" id="food">Food</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('culture') ? 'selected column culture addMargin' : 'column culture addMargin'} onClick={this.handleSelected} id="culture">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle hvr-skew-forward" id="culture">Culture</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="columns home-row2">
            <div className={this.isSelected('beach') ? 'selected column beach addMargin' : 'column beach addMargin'} onClick={this.handleSelected} id="beach">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle hvr-skew-forward" id="beach">Beach</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('snow') ? 'selected column snow addMargin' : 'column snow addMargin'} onClick={this.handleSelected} id="snow">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle hvr-skew-forward" id="snow">Snow</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.isSelected('nature') ? 'selected column nature addMargin' : 'column nature addMargin'} onClick={this.handleSelected} id="nature">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle hvr-skew-forward" id="nature">Nature</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {
            this.state.selectedCity ?
              <>
                <div className="columns home-row3 is-centered">
                  <button className="button is-danger is-rounded addMargin" onClick={this.handleClick}>Take me to a trip!</button>
                </div>
              </>
              :
              <>
                <div className="columns home-row3 is-centered addMargin">
                  <h1 className="title">Whoops! No city found with these specifications 😢</h1>
                </div>
                <div className="columns home-row4 is-centered addMargin">
                  <button className="button is-danger is-rounded" onClick={this.handleReset}>Try again</button>
                </div>
              </>
          }
        </div>
      </section>
    )
  }
}

export default Home
